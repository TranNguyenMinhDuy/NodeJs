const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs").promises;

app.use(express.json());

const DATA_FILE = path.join(__dirname, "todos.json");

//======= Custom error ========
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// ======= MIDDLEWARES ========
// Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
    next();
});

// Response time
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`${duration}ms`);
    });
    next();
});

// Authentication
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (token === "Bearer mytoken123") {
        req.user = { id: 1, username: "user1" };
        next();
    } else {
        throw new ApiError("Unauthorized - Token không hợp lệ", 401);
    }
}

// Validate todo
function validateTodo(req, res, next) {
    const { title } = req.body;
    if (!title || title.trim().length === 0) {
        throw new ApiError("Title is required", 400);
    }
    if (title.length < 3) {
        throw new ApiError("Title phải có ít nhất 3 ký tự", 400);
    }
    next();
}

// ======= HELPERS ========
async function loadTodos() {
    try {
        const data = await fs.readFile(DATA_FILE, "utf8");
        return JSON.parse(data);
    } catch {
        return { todos: [], nextId: 1 };
    }
}

async function saveTodos(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// ======= ROUTES ========

// Get all todos
app.get("/todos", async (req, res, next) => {
    try {
        const data = await loadTodos();
        let todos = data.todos;
        const { completed } = req.query;
        if (completed !== undefined) {
            const isCompleted = completed === "true";
            todos = todos.filter(t => t.completed === isCompleted);
        }
        res.json(todos);
    } catch (error) {
        next(error);
    }
});

// Get one todo
app.get("/todos/:id", async (req, res, next) => {
    try {
        const data = await loadTodos();
        const todo = data.todos.find(t => t.id === parseInt(req.params.id));
        if (!todo) throw new ApiError("Todo not found", 404);
        res.json(todo);
    } catch (error) {
        next(error);
    }
});

// Create todo
app.post("/todos", authenticate, validateTodo, async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const data = await loadTodos();
        const newTodo = {
            id: data.nextId++,
            title: title.trim(),
            description: description ? description.trim() : "",
            completed: false,
            createdBy: req.user.username,
            createdAt: new Date().toISOString(),
        };
        data.todos.push(newTodo);
        await saveTodos(data);
        res.status(201).json(newTodo);
    } catch (error) {
        next(error);
    }
});

// Update todo
app.put("/todos/:id", authenticate, validateTodo, async (req, res, next) => {
    try {
        const data = await loadTodos();
        const index = data.todos.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) throw new ApiError("Todo không tồn tại", 404);

        const { title, description, completed } = req.body;
        data.todos[index].title = title.trim();
        if (description !== undefined) data.todos[index].description = description.trim();
        if (completed !== undefined) data.todos[index].completed = completed;
        data.todos[index].updatedAt = new Date().toISOString();

        await saveTodos(data);
        res.json(data.todos[index]);
    } catch (error) {
        next(error);
    }
});

// Toggle complete
app.patch("/todos/:id/toggle", authenticate, async (req, res, next) => {
    try {
        const data = await loadTodos();
        const index = data.todos.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) throw new ApiError("Todo not found", 404);
        data.todos[index].completed = !data.todos[index].completed;
        data.todos[index].updatedAt = new Date().toISOString();
        await saveTodos(data);
        res.json(data.todos[index]);
    } catch (error) {
        next(error);
    }
});

// Delete todo
app.delete("/todos/:id", authenticate, async (req, res, next) => {
    try {
        const data = await loadTodos();
        const index = data.todos.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) throw new ApiError("Todo not found", 404);
        const deleted = data.todos.splice(index, 1)[0];
        await saveTodos(data);
        res.json({ message: "Todo đã được xóa", todo: deleted });
    } catch (error) {
        next(error);
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Not found",
        message: `Không tìm thấy ${req.method} - ${req.url}`,
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message || "Internal Server Error" });
});

app.listen(3000, () => console.log("✅ Server is running on port 3000"));

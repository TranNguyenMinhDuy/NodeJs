const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, "todos.json");

async function loadTodos() {
    try {
        const todos = await fs.readFile(DATA_FILE, "utf8");
        const data = JSON.parse(todos);
        if (!Array.isArray(data)) return [data];
        return data;
    } catch (error) {
        return [];
    }
}

async function saveTodos(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET /api/todos - Lấy tất cả todos, có filter query ?completed=true/false & ?search=abc
app.get("/api/todos", async (req, res) => {
    try {
        let data = await loadTodos();
        const { completed, search } = req.query;

        if (completed !== undefined) {
            const isCompleted = completed === "true";
            data = data.filter(todo => todo.completed === isCompleted);
        }

        if (search) {
            const lowerSearch = search.toLowerCase();
            data = data.filter(todo => todo.title.toLowerCase().includes(lowerSearch));
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// GET /api/todos/:id - Lấy 1 todo theo id
app.get("/api/todos/:id", async (req, res) => {
    try {
        const data = await loadTodos();
        const todo = data.find(t => t.id === parseInt(req.params.id));
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST /api/todos - Tạo todo mới
app.post("/api/todos", async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: "Title is required" });

        const data = await loadTodos();

        const newTodo = {
            id: Date.now(),
            title,
            description: description || null,
            completed: false,
            createdAt: new Date().toISOString()
        };

        data.push(newTodo);
        await saveTodos(data);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// PUT /api/todos/:id - Cập nhật todo (title, description, completed)
app.put("/api/todos/:id", async (req, res) => {
    try {
        const data = await loadTodos();
        const index = data.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: "Todo not found" });

        const { title, description, completed } = req.body;
        if (title !== undefined) data[index].title = title;
        if (description !== undefined) data[index].description = description;
        if (completed !== undefined) data[index].completed = completed;

        await saveTodos(data);
        res.json(data[index]);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// DELETE /api/todos/:id - Xóa todo
app.delete("/api/todos/:id", async (req, res) => {
    try {
        const data = await loadTodos();
        const index = data.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: "Todo not found" });

        const deleted = data.splice(index, 1)[0];
        await saveTodos(data);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// PATCH /api/todos/:id/toggle - Toggle trạng thái completed
app.patch("/api/todos/:id/toggle", async (req, res) => {
    try {
        const data = await loadTodos();
        const index = data.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: "Todo not found" });

        data[index].completed = !data[index].completed;
        await saveTodos(data);
        res.json(data[index]);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

let fs = require("fs").promises
const { create } = require("domain")
let path = require("path")

let TODO_FILE = path.join(__dirname, "todos.json")

async function loadTodos() {
    try {
        let data = await fs.readFile(TODO_FILE, "utf-8")
        let todos = JSON.parse(data)

        //neu file khong phai mang thi chuyen thanh mang
        if(!Array.isArray(todos)){
            todos = [todos]
        }

        return todos;
    } catch (error) {
        console.error("error: ", error)
        return [];
    }
}

//save todos vao file
async function saveTodos(todos) {
    try {
        let jsonString = JSON.stringify(todos, null, 2)
        await fs.writeFile(TODO_FILE, jsonString);
        console.log("Todos Saved");
    } catch (error) {
        console.error("Error saving todos: ", error);
    }
}

//them todo
async function addTodo(title) {
    let todos = await loadTodos();

    let newTodo = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    await saveTodos(todos);

    console.log(" Added:", newTodo);
    return newTodo;
}
//lay tat ca todos
async function getAllTodos() {
    let todos = await loadTodos();
    console.log("\n All Todos: ")
    if (todos.length === 0) {
        console.log("No todos yet")
    } else {
        todos.forEach(todo => {
            let status = todo.completed ? "✅" : "⬜";
            console.log(`${status} [${todo.id}] ${todo.title}`)
        })
    }

    return todos;
}

//danh dau hoan thanh
async function completeTodo(id) {
    let todos = await loadTodos();
    let todo = todos.find(t => t.id === id)

    if (!todo) {
        console.log("Todo not found")
        return;
    }

    todo.completed = true;
    await saveTodos(todos)
    console.log("Completed: ", todo.title)
}

//xoa todo
async function deleteTodo(id) {
    let todos = await loadTodos()
    let index = todos.findIndex(t => t.id === id)

    if (index === -1) {
        console.log("Todo not found")
        return;
    }

    let deleted = todos.splice(index, 1)[0];
    await saveTodos(todos)
    console.log("Deleted: ", deleted.title)
}

module.exports = {
    addTodo,
    completeTodo,
    deleteTodo,
    getAllTodos,
    loadTodos
}
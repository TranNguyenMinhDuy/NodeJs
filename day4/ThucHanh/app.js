let todo = require("./todo")

async function main() {
    console.log("===TODO APP ===\n")

    // //them todos
    // await todo.addTodo("Hoc 10 tu vung tieng anh")
    // await todo.addTodo("hoc toan 15p")
    // await todo.addTodo("tap the duc")

    // //hien thi tat ca
    // await todo.getAllTodos();

    //lay id cua todo dau tien de test
    let todos = await todo.loadTodos();
    if(todos.length > 0){
        await todo.completeTodo(todos[0].id)
        await todo.getAllTodos();
    }

    console.log(todos[0].id)
}

main()
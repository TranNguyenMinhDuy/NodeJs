// Mini Project: Task Manager với Async/Await

// Simulate database delay
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

// Database simulation
let tasksDB = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Build project", completed: false }
]

let nextId = 3;

console.log('=====// CRUD Operations=========')
async function getAllTasks() {
    await delay(500)
    console.log("Getting all tasks....")
    return [...tasksDB]
}

async function getTaskById(id) {
    await delay(500)
    console.log(`Finding task ${id}......`)
    let task = tasksDB.find(t => t.id === id)
    if (!task) throw new Error("Task not found!")
    return task
}

async function createTask(title) {
    await delay(500)
    console.log(`Creating task: ${title}......`)
    let newTask = {
        id: nextId++,
        title,
        completed: false
    }
    tasksDB.push(newTask)
    return newTask
}

async function updateTask(id, updates) {
    await delay(500)
    console.log(`Updating task ${id}...`)
    let index = tasksDB.findIndex(t => t.id === id)
    if (index === -1) throw new Error("Task not found")

    tasksDB[index] = { ...tasksDB[index], ...updates }
    return tasksDB[index]
}

async function deleteTask(id){
    await delay(500)
    console.log(`Deleting task ${id}....`)
    let index = tasksDB.findIndex(t => t.id === id)
    if(index === - 1) throw new Error("Task not found")

    let deleted = tasksDB[index]
    tasksDB.splice(index, 1)
    return deleted;
}

async function main(){
    try{
        console.log("====Task Manager=====\n")
        console.log('===1.Get ALl Task====')
        let tasks = await getAllTasks();
        console.log('Current Tasks: ', tasks)
        console.log()

        console.log('===2. Create New Task======')
        let newTask = await createTask("Task1")
        console.log("Created: ", newTask)
        console.log()

        console.log('====3.Get Specific task====')
        let task = await getTaskById(1)
        console.log("Found Task: ", task)
        console.log()

        console.log('====4. Update Task====')
        let update = await updateTask(1, {completed: true})
        console.log("Updated Task: ", update)
        console.log()

        console.log("===5. Get All Task Again====")
        tasks = await getAllTasks();
        console.log("All Tasks after update: ", tasks);
        console.log()

        console.log("===6. Delete Task====")
        let deleted = await deleteTask(1)
        console.log("Deleted Task: ", deleted)
        console.log()

        console.log("===7. Final State===")
        tasks =await getAllTasks();
        console.log('Final Tasks: ', tasks)
        console.log();
    }catch(error){
        console.log("Error: ", error)
    }
}

main()

//xu ly nhieu task song song
async function bulkCreateTasks(titles){
    console.log('\n===Bulk Create===')

    try{
        let promises = titles.map(title => createTask(title))
        let results = await Promise.all(promises)

        console.log('Created Tasks: ', results)
        return results;
    }catch(error){
        console.error("Error in bulk create: ", error)
    }
}

setTimeout(async () => {
    await bulkCreateTasks([
        "Study React",
        "Learn NodeJS"
    ]);

    let allTasks = await getAllTasks();
    console.log('\nAll Tasks: ', allTasks)
}, 5000)

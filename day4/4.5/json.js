let fs = require("fs").promises;

console.log("===Lam viec voi JSON File====")

async function readJson(fileName) {
    try {
        let data = await fs.readFile(fileName, "utf8")
        return JSON.parse(data)
    } catch (error) {
        console.error("Error reading JSON: ", error)
    }
}

async function writeJson(fileName, data) {
    try {
        let jsonString = JSON.stringify(data, null, 2)
        await fs.writeFile(fileName, jsonString)
        console.log("JSON written successfully!!!")
    }catch(error){
        console.error("Error writing JSON: ", error)
    }
}

//su dung
async function main(){
    //ghi du lieu
    let users = [
        {id: 1, name: "An", email: "an@gmail.com"},
        {id: 2, name: "Binh", email: "binh@gmail.com"}
    ]

    await writeJson("users.json", users)

    //doc du lieu 
    let loadedUsers = await readJson("users.json")
    console.log("Loaded users: ", loadedUsers)
}

main();
let fs = require("fs").promises;

async function readFileSync(){
    try{
        let data = await fs.readFile("data.txt", "utf8")
        console.log("file content: ")
        console.log(data)

    }catch(error){
        console.error("Error: ", error)
    }
}

readFileSync()
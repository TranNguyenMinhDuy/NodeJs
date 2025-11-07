let fs = require("fs").promises

async function writeFileExample() {
    try{
        //ghi file (overwrite neu da ton tai)
        await fs.writeFile("output.txt", "Hello from Node.js")
        console.log("File written successfully")

        //append vao file
        await fs.appendFile("output.txt","\nNew line added")
        console.log("Content appended")
    }catch(error){
        console.error("Error: ", error)
    }
}

writeFileExample();
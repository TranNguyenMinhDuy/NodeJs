let fs = require("fs")

try{
    //readFileSync() - Sync(Blocking)
    let data = fs.readFileSync("data.txt", "utf8")
    console.log("File content: ")
    console.log(data);

}catch(error){
    console.error("Error: ", error)
}

console.log("This runs after!")
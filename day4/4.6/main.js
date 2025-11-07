console.log("====Kiem tra file/ folder ton tai====")
let fs = require("fs")

async function fileExists(path) {
    try{
        await fs.access(path)
        return true;
    }
    catch{
        return false;
    }
}

async function checkFiles() {
    let exists = await fileExists("file.txt")
    console.log("data.txt exists? ", exists)

    exists = await fileExists("not-exist.txt")
    console.log("not-exists.txt exists?", exists)
}

checkFiles()
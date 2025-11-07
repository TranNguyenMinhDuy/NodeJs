console.log("====Lam viec voi Folders====")
let fs = require("fs").promises
let path = require("path")

//tao folder
async function createFolder(folderName) {
    try {
        await fs.mkdir(folderName);
        console.log(`Folder '${folderName}' created`)
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log("Error already exists")
        } else {
            console.error("Error: ", error)
        }
    }
}

//doc noi dung folder
async function readFolder(folderPath) {
    try {
        let files = await fs.readdir(folderPath)
        console.log("Files in folder: ")
        files.forEach(file => {
            console.log("-", file)
        });
    } catch (error) {
        console.error("error: ", error)
    }
}

//xoa file
async function deleteFile(fileName) {
    try {
        await fs.unlink(fileName)
        console.log(`Folder '${fileName}' deleted`)
    } catch (error) {
        console.error("error: ", error)
    }
}

//xoa folder (phai rong)
async function deleteFolder(folderName) {
    try {
        await fs.rmdir(folderName)
        console.log(`Folder '${folderName} deleted'`)
    }catch(error){
        console.error("Error: ", error)
    } 
}

//test
async function testFolder(){
    // await createFolder("folder")
    // await readFolder(".")
    await deleteFolder("folder")
}

testFolder()
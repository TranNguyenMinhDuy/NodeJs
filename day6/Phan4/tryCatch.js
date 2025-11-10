let express = require("express")
let app = express()

//gia lap database
async function getUserFromDb(id) {
    await new Promise(resolve => setTimeout(resolve, 100));

    if(id === 1){
        return {id: 1, name: "An"}
    }else{
        throw new Error("User not found")
    }
}

//route voi try-catch
app.get("/api/users/:id", async (req, res) => {
    try{
        let id = parseInt(req.params.id);
        let user = await getUserFromDb(id);
        res.json(user);
    }catch(error){
        res.status(500).json({
            error: error.message
        });
    }
});
app.listen(3000)
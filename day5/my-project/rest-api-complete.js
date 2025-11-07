let express = require("express")
let fs = require("fs")
let path = require("path");

let app = express();
app.use(express.json());

let DATA_FILE = path.join(__dirname, "users.json");

//Helper: Load data
async function loadUser(){
    try{
        let users = await fs.readFile(DATA_FILE, "utf8");
        let data = JSON.parse(users)

        if(!Array.isArray(data)){
            data=[data]
        }

        return data;
    }catch(error){
        return [];
    }
}

//Helper: Save data
async function saveUsers(data) {
    await fs.writeFile(DATA_FILE,JSON.stringify(data, null, 2));
}

//get all users
app.get("/api/users", async (req, res) => {
    try{
        let data = await loadUser();
        res.json(data.users);
    }catch(error){
        res.status(500).json({error: "Loi server"})
    }
});

//get one user
app.get("/api/users/:id", async(req, res) => {
    try{
        let data = await loadUser();
        let user = data.users.find(u => u.id === parseInt(req.params.id));

        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        res.json(user);
    }catch(error){
        res.status(500).json({error: "Loi server"})
    }
})

//post - create user
app.post("/api/users", async(req, res) => {
    try{
        let {name, email, age} = req.body;

        //validation;
        if(!name || !email){
            return res.status(400).json({error: "Name va Email la bat buoc"})
        }

        let data = await loadUser();

        //create new User
        let newUser = {
            id: Date.now(),
            name, 
            age: age || null,
            email,
            createdAt: new Date().toISOString
        };

        data.users.push(newUser);
        await saveUsers(data);

        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error: "Loi server"})
    }
});

//put - update user
app.put("/api/users/:id", async (req, res) => {
    try{
        let data = await loadUser();
        let index = data.users.findIndex(u => u.id === parseInt(req.params.id));

        if(index === -1){
            return res.status(404).json({error: "User not found"});
        }

        let {name, age, email} = req.body;

        //update
        if(name){
            data.users[index].name = name;
        }
        if(age !== undefined){
            data.users[index].age = age;
        }
        if(email){
            data.users[index].email = email;
        }
        data.users[index].updatedAt = new Date().toISOString();
        
        await saveUsers(data);
        res.json(data.users[index])
    }catch(error){
        res.status(500).json({error: "Fail load Server"})
    }
});

//delete user
app.delete("/api/users/:id", async (req, res) => {
    try{
        let data = await loadUser();
        let index = data.users.findIndex(u => u.id === parseInt(req.params.id));

        if(index === -1){
            res.status(404).json({error: "User not found"});
        }

        let deleted = data.users.splice(index, 1)[0];

        await saveUsers(data);
        res.json({
            message: "User is deleted",
            user: deleted
        });
    }catch(error){
        res.status(500).json({error: "Fail to Load Server"})
    }
})

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server start!!!!")
})
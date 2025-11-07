let express = require("express")
let app = express()

//Quan trong: Middleware de parse JSON
app.use(express.json())

//In-memory database
let users = [
    { id: 1, name: "An", email: "an@gmail.com" },
    { id: 2, name: "Bình", email: "binh@gmail.com" }
];

let nextId = 3;

//get all users
app.get("/api/users", (req, res) => {
    res.json(users);
})

// GET one user
app.get("/api/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

app.post("/api/users", (req, res) => {
    console.log("Request body: ", req.body)

    let { name, email } = req.body;

    //Validation
    if (!name || !email) {
        return res.status(400).json({
            error: "Name va email la bat buoc"
        });
    }

    //create new user
    let newUser = {
        id: nextId++,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser)
});

//Put- update user
app.put("/api/users/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let {name, email} = req.body

    let user = users.find(u => u.id === id);
    
    if(!user){
        return res.status(404).json({error: "User not found"});
    }

    //update
    if(name) user.name = name;
    if(email) user.email = email;

    res.json(user)
});

//delete user
app.delete("/api/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let index = users.findIndex(u => u.id === id)

    if(index === -1){
        return res.status(404).json({error: "User not found"});
    }

    let deleted = users.splice(index, 1)[0];
    
    res.json({
        message: "User da duoc xoa",
        user: deleted
    });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
let express = require("express")
let bcrypt = require("bcrypt")
let app = express();

app.use(express.json());

let users = [];

//register
app.post("/register", async (req, res) => {
    try {
        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password is required" });
        }

        //check user exists
        if (users.find(u => u.username === username)) {
            return res.status(409).json({ error: "User name is exists" });
        }

        //hash password
        let hashedPassword = await bcrypt.hash(password, 10);

        let newUser = {
            id: users.length + 1,
            username,
            password: hashedPassword //luu password da hash
        };

        users.push(newUser);

        res.status(201).json({
            message: "user created",
            user: { id: newUser.id, username: newUser.username }
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

//login 
app.post("/login", async (req, res) => {
    try {
        let { username, password } = req.body;

        //find user 
        let user = users.find(u => u.username === username);
        if (!user) {
            return res.status(401).json({ error: "Username or password incorrect" });
        }

        //compare password
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Username or password is incorrect" });
        }

        res.json({
            message: "Login succesfully",
            user: { id: user.id, username: user.username }
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.json(users);
    res.status(201).json({ message: "Danh sach users" })
})

app.listen(3000);
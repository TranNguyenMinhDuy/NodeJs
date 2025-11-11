let fs = require("fs").promises;
const { error } = require("console");
let path = require("path");

let DATA_FILE = path.join(__dirname, "../../data/users.json");

//helper functions
async function loadUsers() {
    try {
        let data = await fs.readFile(DATA_FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return { users: [], nextId: 1 };
    }
}

async function saveUsers(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

//controllers
exports.getAllUsers = async (req, resizeBy, next) => {
    try {
        let data = await loadUsers();
        res.json(data.users);
    } catch (error) {
        next(error);
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        let data = await loadUsers();
        let index = data.users.find(u => u.id === parseInt(req.params.id));

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        next(error)
    }
};

exports.createUser = async (req, res, next) => {
    try {
        let { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "Name and email is required" });
        }

        let data = await loadUsers();
        let newUser = {
            id: data.nextId,
            name,
            email,
            createdAt: new Date().toISOString()
        };

        data.users.push(newUser);
        data.nextId++;

        await saveUsers(data);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        let data = await loadUsers();
        let index = data.users.find(u => u.id === parseInt(req.params.id));

        if (index === -1) {
            return res.status(404).json({ error: "User not found" });
        }

        let { name, email } = req.body;
        if (name) data.users.name = name;
        if (email) data.users.email = email;

        data.users[index].updatedAt = new Date().toISOString();
        await saveUsers(data);
        res.json(data.users[index]);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        let data = await loadUsers();
        let index = data.users.find(u => u.id === parseInt(req.params.id));

        if(index === -1){
            return res.status(404).json({error: "User not found"});
        }

        let deleted = data.users.splice(index, 1)[0];

        await saveUsers(data);
        res.json({message: "User deleted", user: deleted});
    } catch (error) {
        next(error);
    }
};
































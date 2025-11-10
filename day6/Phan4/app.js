let express = require("express")
let AppError = require("./AppError");
const e = require("express");
let app = express()

app.use(express.json())

let users = [
  { id: 1, name: "An", email: "an@gmail.com" },
  { id: 2, name: "Bình", email: "binh@gmail.com" }
];

//get users
app.get("/users/:id", (req, res, next) => {
    try{
        let id = parseInt(req.params.id);
        let user = users.find(u => u.id === id);
        if(!user){
            throw new Error("User not found",  404);
        }
        res.json(user);
    }catch(error){
        next(error);
    }
});

//post user
app.post("/users", (req, res, next) => {
    try{
        let {name , email } = req.body;

        if(!name || !email){
            throw new AppError("Name va Email is required!!", 400);
        }

        //check duplicate email
        if(users.find(u => u.email === email)){
            throw new AppError("Email is exists", 409);
        }

        let newUser = {
            id: users.length + 1,
            name,
            email
        };

        users.push(newUser);
        res.status(201).json(newUser);
    }catch(error){
        next(error);
    }
});

//404 handler
app.use((req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Khong tim thay ${req.method} ${req.url}`
    });
})

//error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
  
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
})

app.listen(3000);
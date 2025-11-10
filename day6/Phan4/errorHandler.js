let express = require("express")
let app = express()

app.use(express.json())

//route
app.get("/api/users/:id", async (req, res, next) => {
    try{
        let id = parseInt(req.params.id);
        if(id !== 1){
            let error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        res.json({id: 1, name: "An"});
    }catch(error){
        next(error); // chuyen error sang error handler
    }
});

app.post("/api/users", async (req, res, next) => {
    try{
        let {name, email} = req.body;
        if(!email || !name){
            let error = new Error("Name and Email is required!")
            error.statusCode = 400;
            throw error;
        }

        res.status(201).json({name, email})
    }catch(error){
        next(error);
    }
});

//404 handler - Phai dat sau tat ca routes
app.use((req, res) => {
    res.status(404).json({
        message: `Khong tim thay ${req.method} - ${req.url}`
    })
})

//Error Handler - Phai co 4 parameters!
app.use((err, req, res, next) => {
    console.error("Error: ", err.message);
    console.error("Stack: ", err.stack);

    let statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.message || "Internal Server Error"
    })
})

app.listen(3000);
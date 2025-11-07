let express = require("express")
let app = express()

// Fake database
let users = [
  { id: 1, name: "An", age: 25, city: "Hanoi" },
  { id: 2, name: "Bình", age: 30, city: "HCMC" },
  { id: 3, name: "Cường", age: 28, city: "Da Nang" }
];

//get all users 
app.get("/api/users", (req, res) => {
    res.json(users)
});

//get user by id = route parameter
app.get("/api/user/:id", (req, res) => {
   let id = parseInt(req.params.id);
   let user = users.find(u => u.id === id);

   if(!user){
    return res.status(404).json({error: "Khong tim thay user"})
   }

   res.json(user);
});

//multiple parameters
app.get("/api/users/:id/posts/:postId", (req, res) => {
    let {id, postId} = req.params
    res.json({
        message: "Lay post cua user",
        userId: id,
        postId: postId
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})

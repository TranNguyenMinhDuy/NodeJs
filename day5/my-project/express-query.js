let express = require("express")
let app = express()

let products = [
  { id: 1, name: "Laptop", price: 20000000, category: "Electronics" },
  { id: 2, name: "Mouse", price: 200000, category: "Electronics" },
  { id: 3, name: "Bàn", price: 3000000, category: "Furniture" },
  { id: 4, name: "Ghế", price: 2000000, category: "Furniture" },
  { id: 5, name: "Bàn phím", price: 500000, category: "Electronics" }
];

//search & filter
app.get("/api/products", (req, res) => {
    let {category, minPrice, maxPrice, search} = req.query;

    let result = [...products];

    //filter by category
    if(category){
        result = result.filter(p => p.category === category);
    }

    //search by name 
    if(search){
        result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }

    //filter by price range
    if(minPrice){
        result = result.filter(p => p.price >= parseInt(minPrice));
    }
    if(maxPrice){
        result = result.filter(p => p.price <= parseInt(maxPrice));
    }

    res.json({
        total: result.length,
        products: result
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})
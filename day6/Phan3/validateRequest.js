let express = require("express")
let app = express()

app.use(express.json())

//validator middleware factory
function validateBody(schema) {
    return (req, res, next) => {
        let errors = [];

        //check required fields
        if (schema.required) {
            for (let field of schema.required) {
                if (!req.body[field]) {
                    errors.push(`Truong ${field} la bat buoc`)
                }
            }
        }

        //check field types
        if (schema.types) {
            for (let [field, type] of Object.entries(schema.types)) {
                if (req.body[field] && typeof req.body[field] !== type) {
                    errors.push(`Trường '${field}' phải là kiểu ${type}`);
                }
            }
        }

        // Check email format
        if (schema.email && req.body[schema.email]) {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(req.body[schema.email])) {
                errors.push("Email không hợp lệ");
            }
        }

        // Check min length
        if (schema.minLength) {
            for (let [field, min] of Object.entries(schema.minLength)) {
                if (req.body[field] && req.body[field].length < min) {
                    errors.push(`Trường '${field}' phải có ít nhất ${min} ký tự`);
                }
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        next()
    }
}

// User schema
let userSchema = {
    required: ["name", "email", "password"],
    types: {
        name: "string",
        email: "string",
        password: "string",
        age: "number"
    },
    email: "email",
    minLength: {
        name: 3,
        password: 6
    }
};

// Apply validator
app.post("/api/users", validateBody(userSchema), (req, res) => {
    res.json({
        message: "User created successfully",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server is running")
});
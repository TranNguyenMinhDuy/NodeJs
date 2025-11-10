let express = require("express")
let app = express()
let { body, validationResult } = require("express-validator");

app.use(express.json());

//validation & samitization
app.post("/users",
    //validation rules
    body("email")
        .isEmail().withMessage("Email khong hop le")
        .normalizeEmail(),
    body("name")
        .trim()
        .escape()
        .isLength({min: 3}.withMessage("Ten phai co it nhat 3 ky tu")),
    (req, res) => {
        //check validation errors
        let error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        //data da duoc validate va sanitize
        res.json({
            message: "users created",
            data: req.body
        });
    }
);

app.listen(3000)
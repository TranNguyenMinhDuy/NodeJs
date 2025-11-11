let config = require("../config/config");

exports.authenticate = (req, res, next) => {
    let token = req.headers.authorization;

    if(token && token === `Bearer ${config.security.apikey}`){
        req.user = { id: 1, username: "admin"};
        next();
    }else{
        res.status(401).json({error: "Unauthorized"})
    }
};
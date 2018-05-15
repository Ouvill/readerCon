const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (!req.auth) {
        res.status(401).json({
            "result": false,
            "message": "you need login."
        });
        return
    }
    next();
}

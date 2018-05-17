const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        req.auth = false
        next();
        return
    }
    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) {
            req.auth = false
        } else {
            req.auth = decoded;
        }
        console.log(req.auth)
        next();
    });
}

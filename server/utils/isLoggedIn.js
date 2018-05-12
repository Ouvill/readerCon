const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.body.token || req.query.token || req.header['x-access-token'];

    if (!token) {
        res.json({
            "result": false,
            "message": "you need login."
        });
        return
    }

    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) {
            console.log(err);
            return res.json(
                {
                    result: false,
                    message: 'Invalid jwt token.'
                }
            );
        }

        req.authorized = decoded;
        next();
    });
}

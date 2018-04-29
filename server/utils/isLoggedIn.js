module.exports = function (req, res, next) {
    var userId = req.session.userId;
    if (userId) {
        next();
    } else {
        res.send(JSON.stringify({
            "result": false,
            "message": "you need login."
        }));
    }
}

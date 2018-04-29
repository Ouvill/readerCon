var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/oauth',
    passport.authenticate('twitter'), function () {
        console.log(req, res, next);
    }
);

router.get('/callback', passport.authenticate('twitter', {
    failureRedirect: '/fail'
}), function (req, res, next) {
    console.log("req.session.passport:");
    console.dir(req.session.passport);

    res.redirect('/');

});

module.exports = router;

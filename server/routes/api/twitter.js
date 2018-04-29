const express = require('express');
const router = express.Router();
var moment = require('moment');
const passport = require('passport');
const connection = require('../../utils/pgConnection');

router.get('/oauth',
    passport.authenticate('twitter'), function () {
        console.log(req, res, next);
    }
);

router.get('/callback', passport.authenticate('twitter', {
    failureRedirect: '/fail'
}), async function (req, res, next) {
    req.session.userId = await searchOrRegistUser(req.session);
    console.log(req.session.userId);
    res.redirect('/');
});

const searchOrRegistUser = async (session) => {
    const user = session.passport.user
    const twitterId = user.id
    try {
        let userId = await getUserId(twitterId);
        if (userId) {
            // user registed
            return userId;
        } else {
            // user unregisted
            const userName = user.username;
            const displayName = user.displayName;
            userId = await registUser(userName, displayName, twitterId);
            return userId;
        }
    } catch (err) {
        console.log(err.stack)
    }
}

const getUserId = async (twitterId) => {
    try {
        const userSeachRes = await connection.query('SELECT * FROM users WHERE "twitter_id" = $1 LIMIT 1', [twitterId]);
        var userId = userSeachRes.rows.length ? userSeachRes.rows[0].user_id : false;
        return userId;
    } catch (err) {
        throw err;
    }
}

const registUser = async (userName, displayName, twitterId) => {
    try {
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const userAddRes = await connection.query('INSERT INTO users(user_name, display_name, twitter_id,created_at) VALUES($1,$2,$3, $4) RETURNING user_id', [
            userName, displayName, twitterId, createdAt
        ]);
        return userId = userAddRes.rows[0].user_id
    } catch (err) {
        throw err;
    }
}

module.exports = router;

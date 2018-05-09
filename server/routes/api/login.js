const express = require('express');
const router = express.Router();
const hash = require('../../utils/hash');
const aes = require('../../utils/aes_crypto');
const db = require('../../utils/pgConnection');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/', async function (req, res, next) {
    const email = req.body.email
    const password = req.body.password
    console.log(req.body.email);
    if (!checkReq(email, password)) {
        res.json({
            result: false,
            message: 'Authentication Error'
        })
        return;
    }

    const userInfo = await authenticate(email, password);
    const userId = userInfo.user_id
    if (userId) {
        const token = jwt.sign({
            userId,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
        }, process.env.JWT_KEY)
        res.json({
            result: true,
            token: token,
            userInfo: {
                userName: userInfo.user_name,
                displayName: userInfo.display_name
            },
            message: 'Authentication successfully finished.'
        })
        return;
    } else {
        res.json({
            result: false,
            message: 'Authentication Error'
        })
        return;
    }
});

module.exports = router;

const authenticate = async (email, password) => {

    const cipherEmail = aes.cipher(email);
    const hashPassword = hash(password);

    const query = {
        name: 'authenticate',
        text: 'SELECT user_id , user_name , display_name FROM users WHERE email = $1 AND password = $2 LIMIT 1',
        values: [cipherEmail, hashPassword]
    }
    try {
        const { rows } = await db.query(query);
        const userInfo = rows ? rows[0] : false
        return userInfo;
    } catch (err) {
        console.log(err.stack)
    }
}

const checkReq = (email, password) => {
    if (typeof email === 'undefined' || typeof password === 'undefined' || email == '' || password == '') {
        return false
    }
    return true
}

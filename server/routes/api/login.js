const express = require('express');
const router = express.Router();
const hash = require('../../utils/hash');
const aes = require('../../utils/aes_crypto');
const db = require('../../utils/pgConnection');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', async function (req, res, next) {
    const email = req.body.email
    const password = req.body.password
    console.dir(req.body);
    if (!checkReq(email, password)) {
        res.json({
            result: false,
            message: 'Authentication Error'
        })
        return;
    }

    const userId = await authenticate(email, password);
    if (userId) {
        const token = jwt.sign({ userId }, process.env.JWT_KEY)
        res.json({
            result: true,
            token: token,
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
        text: 'SELECT user_id FROM users WHERE email = $1 AND password = $2 LIMIT 1',
        values: [cipherEmail, hashPassword]
    }
    try {
        const { rows } = await db.query();
        const userId = rows ? rows[0].user_id : false
        return userId;
    } catch (err) {
        console.log(err.stack)
    }
}

const checkReq = (email, password) => {
    if (typeof email === 'undefined' || typeof password === 'undefined') {
        return false
    }
    return true
}

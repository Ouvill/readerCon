var express = require('express');
var router = express.Router();
var moment = require('moment');
const connection = require('../../utils/pgConnection');
const aes = require('../../utils/aes_crypto');
const hash = require('../../utils/hash');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({
        result: false,
        message: "use POST method"
    })
});

router.post('/', async function (req, res, next) {
    const userName = req.body.userName;
    const displayName = req.body.displayName;
    const email = req.body.email;
    const password = req.body.password;
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

    if (userName == '' || displayName == '' || email == '' || password == '') {
        res.json({
            result: false,
            message: 'not null',
            messageJa: '入力項目に空白があります'
        })
        return
    }

    const cipherEmail = aes.cipher(email);
    const hashPassword = hash(password);

    if (await existsEmail(cipherEmail)) {
        res.json({
            result: false,
            message: "input email is exists",
            messageJa: '既に登録されているメールアドレスです'
        });
        return
    }

    if (await existUserName(userName)) {
        res.json({
            result: false,
            message: "input user name is exists",
            messageJa: '既に存在するユーザーIDです'
        });
        return
    }

    const query = {
        name: 'regist_user',
        text: 'INSERT INTO users(user_name, display_name, email, password , created_at) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
        values: [userName, displayName, cipherEmail, hashPassword, createdAt]
    }
    try {
        const userId = await connection.query(query);
        res.json({
            result: true,
            message: 'regist your data'
        });
    } catch (err) {
        console.log(err.stack);
    }
});

module.exports = router;

const exists = async (query, value) => {
    try {
        const userData = await connection.query(query);
        const res = userData.rows.length ? true : false;
        return res;
    } catch (err) {
        console.log(err.stack);
    }
}

const existsEmail = async (email) => {
    const query = {
        name: 'exist_user_email',
        text: "SELECT * FROM users WHERE email=$1 LIMIT 1",
        values: [email]
    }
    return await exists(query, email);
}

const existUserName = async (userName) => {
    const query = {
        name: 'exist_user_name',
        text: "SELECT * FROM users WHERE user_name=$1 LIMIT 1",
        values: [userName]
    }
    return await exists(query, userName);
}

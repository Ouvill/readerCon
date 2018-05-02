var express = require('express');
var router = express.Router();
var moment = require('moment');
const connection = require('../../utils/pgConnection');

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

    if (await existsEmail(email) || await existUserName(userName)) {
        res.json({
            result: false,
            message: "input user is exists"
        });
        return
    }

    const query = {
        name: 'regist_user',
        text: 'INSERT INTO users(user_name, display_name, email, password , created_at) RETURNING user_id',
        value: [userName, displayName, email, password, createdAt]
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

const exists = async (column, value) => {
    try {
        const query = {
            name: 'exist_email',
            text: 'SELECT * FROM users WHERE $1 =  $2 LIMIT 1',
            values: [ column ,value ]
        }
        const userData = await connection.query(query);
        const res = userData.rows.length ? true : false;
        return res;
    } catch (err) {
        console.log(err.stack);
    }
}

const existsEmail = async (email) => {
    return await exists('email', email);
}

const existUserName = async (userName) => {
    return await exists('user_name', userName);
}

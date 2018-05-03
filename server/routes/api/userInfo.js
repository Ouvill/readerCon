const express = require('express');
const router = express.Router();
const connection = require('../../utils/pgConnection');

router.get('/', async function (req, res, next) {
    try {
        userId = req.session.userId;
        const userRows = await connection.query(' SELECT user_id , user_name, display_name FROM users WHERE user_id = $1 LIMIT 1', [userId]);
        const userInfo = userRows.rows[0];
        res.json({
            result: true,
            userInfo,
            message: "here you are !"
        });
    } catch (err) {
        res.json({
            result: false,
            message: "i cant get your data"
        });
        console.log("userInfo error:" + err.stack);
    }
})


module.exports = router;

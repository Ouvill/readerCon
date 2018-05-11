const express = require('express');
const router = express.Router();
const db = require('../../utils/pgConnection');

/* GET constests listing. */
router.get('/', async function (req, res, next) {
    const query = {
        name: 'all_contests',
        text: 'SELECT * FROM contests',
        values: [],
    }
    try {
        const { rows } = await db.query(query);
        res.json({
            result: true,
            message: 'here you are !!',
            contests: rows
        });
        return
    } catch (err) {
        res.json({
            result: false,
        })
        console.log(err.stack);
        return
    }
});

// contests を作成
router.post('/create', function (req, res, next) {
    console.log(req.body);
    const { title, overview, entryPeriod, startContestAt, contestPeriod } = req.body
    if (!title || !overview || !entryPeriod || !startContestAt || !contestPeriod) {
        res.statusCode = 400;
        res.json({
            result: false,
            message: 'bad request'
        })
        return;
    }

    res.json({
        result: true
    })

})

router.get('/entryAccepting', function (req, res, next) {
    res.json({
        result: true,
        message: 'entry'
    })

})

router.get('/voteAccepting', function (req, res, next) {

})

router.get('/pastContests/', function (req, res, next) {

})

router.get('/:contest_id', function (req, res, next) {

})



module.exports = router;

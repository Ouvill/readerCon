const express = require('express');
const router = express.Router();
const moment = require('moment');
const db = require('../../utils/pgConnection');
const camel = require('../../utils/camelConverter');

/* GET constests listing. */
router.get('/', async function (req, res, next) {
    const query = {
        name: 'all_contests',
        text: 'SELECT * FROM contests ORDER BY entry_period ASC',
        values: [],
    }
    try {
        const { rows } = await db.query(query);
        res.json({
            result: true,
            message: 'here you are !!',
            contests: camel.jsonKeyToLowerCamel(rows)
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


router.get('/entryAccepting', async function (req, res, next) {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const query = {
        name: 'entry accepting contests',
        text: 'SELECT * FROM contests WHERE entry_period > $1 ORDER BY entry_period ASC',
        values: [now]
    }

    try {
        const { rows } = await db.query(query);
        res.json({
            result: true,
            message: 'entry',
            contests: camel.jsonKeyToLowerCamel(rows)
        })
    } catch (err) {
        res.statusCode = 500;
        res.json({
            result: false,
            message: 'server error'
        });
        console.log(err.stack);
    }

})

router.get('/voteAccepting', async function (req, res, next) {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const query = {
        name: 'vote accepting contests',
        text: 'SELECT * FROM contests WHERE contest_period > $1 ORDER BY contest_period ASC',
        values: [now]
    }

    try {
        const { rows } = await db.query(query);
        res.json({
            result: true,
            message: 'here you are!! vote accepting contests',
            contests: camel.jsonKeyToLowerCamel(rows)
        })
    } catch (err) {
        res.statusCode = 500;
        res.json({
            result: false,
            message: 'server error'
        });
        console.log(err.stack);
    }
})

router.get('/pastContests', async function (req, res, next) {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const query = {
        name: 'pastContests contests',
        text: 'SELECT * FROM contests WHERE contest_period < $1 ORDER BY contest_period DESC',
        values: [now]
    }

    try {
        const { rows } = await db.query(query);
        res.json({
            result: true,
            message: 'here you are!! pastContests contests',
            contests: camel.jsonKeyToLowerCamel(rows)
        })
    } catch (err) {
        res.statusCode = 500;
        res.json({
            result: false,
            message: 'server error'
        });
        console.log(err.stack);
    }

})

router.get('/:contestId', async function (req, res, next) {
    let contestId = req.params.contestId
    if (!isFinite(contestId)) {
        // res.status(400);
        res.status(400).json({
            result: false,
            message: 'bad requests'
        })
        return
    }

    const query = {
        name: 'get contest',
        text: 'SELECT * FROM contests WHERE contest_id=$1',
        values: [contestId]
    }

    const novels_query = {
        text: 'SELECT * FROM contest_works INNER JOIN novels ON contest_works.novel_id = novels.novel_id WHERE contest_works.contest_id=$1',
        values: [contestId]
    }

    try {
        const { rows } = await db.query(query);
        const novels = (await db.query(novels_query)).rows;
        // const novels = novel_res.rows;
        const contest = rows.length ? rows[0] : false;
        if (contest) {
            res.json({
                result: true,
                message: 'here you are',
                contest: camel.jsonKeyToLowerCamel(contest),
                novels: camel.jsonKeyToLowerCamel(novels),
            });
            return
        } else {
            res.status(404).json({
                result: false,
                message: 'the contest is not exist'
            });
        }
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({
            result: false,
            message: 'server error'
        })
    }

})

// contests を作成
router.post('/create', function (req, res, next) {
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

module.exports = router;

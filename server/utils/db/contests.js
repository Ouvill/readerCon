const db = require('../pgConnection');
const camel = require('../camelConverter');
const moment = require('moment');

const contests = {
    info: async (contestId) => {
        const query = {
            text: 'SELECT * FROM contests where contest_id = $1',
            values: [contestId]
        }
        const contestRows = (await db.query(query)).rows
        let contest = contestRows.length ? contestRows[0] : false
        if (!contest) {
            return false
        }
        return camel.jsonKeyToLowerCamel(contest);
    },

    create: async (userId, title, overview, entryPeriod, startContestAt, contestPeriod) => {

        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const query = {
            text: 'INSERT INTO contests( owner_id,title, overview, entry_period, start_contest_at, contest_period, created_at) VALUES ( $1, $2, $3 ,$4 , $5, $6, $7) RETURNING *',
            values: [userId, title, overview, entryPeriod, startContestAt, contestPeriod, createdAt]
        }

        try {
            const { rows } = await db.query(query);
            return camel.jsonKeyToLowerCamel(rows[0]);
        } catch (err) {
            throw (err);
        }
    },

    apply: async (contestId, novelId) => {
        const selectQuery = {
            text: 'SELECT * FROM contest_works WHERE novel_id = $1',
            values: [novelId]
        }

        const insertQuery = {
            text: 'INSERT INTO contest_works ( contest_id, novel_id ) VALUES ( $1, $2) RETURNING *',
            values: [contestId, novelId]
        }
        try {
            const selectRows = (await db.query(selectQuery)).rows
            if (selectRows.length) {
                return false
            }
            const { rows } = await db.query(insertQuery);
            return camel.jsonKeyToLowerCamel(rows[0]);
        } catch (err) {
            throw (err)
        }
    }
}

module.exports = contests

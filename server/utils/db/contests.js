const db = require('../pgConnection');
const camel = require('../camelConverter');

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
    }
}

module.exports = contests

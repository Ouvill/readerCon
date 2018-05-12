const db = require('../pgConnection');
const camel = require('../camelConverter');

const novels = {
    contestsNovel: async (contestId, novelId) => {
        const query = {
            text: 'SELECT * FROM novels INNER JOIN contest_works ON novels.novel_id = contest_works.novel_id AND novels.novel_id = $1 AND contest_works.contest_id = $2',
            values: [contestId, novelId]
        }
        const rows = (await db.query(query)).rows
        let novel = rows.length ? rows[0] : false
        if (!novel) {
            return false
        }
        return camel.jsonKeyToLowerCamel(novel);
    }
}

module.exports = novels

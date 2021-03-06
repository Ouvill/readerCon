const db = require('../pgConnection');
const camel = require('../camelConverter');

const chapters = {
    novelChapters: async (novelId) => {
        const query = {
            text: 'SELECT chapter_num, title, chapter_id , novel_id, access_count, accept_comment FROM chapters WHERE novel_id = $1 ORDER BY chapter_num ASC',
            values: [novelId]
        }
        const { rows } = await db.query(query)
        return camel.jsonKeyToLowerCamel(rows);
    },

    chapterContent: async (novelId, chapterNum) => {
        const query = {
            text: 'SELECT * FROM chapters WHERE novel_id = $1 AND chapter_num = $2',
            values: [novelId, chapterNum]
        }
        const { rows } = await db.query(query)
        const chapter = rows.length ? rows[0] : false
        if (!chapter) {
            return false
        }
        return camel.jsonKeyToLowerCamel(chapter)
    },
}

module.exports = chapters

const db = require('../pgConnection');
const camel = require('../camelConverter');

const user = {
    publicInfo: async (userId) => {
        const query = {
            text: 'SELECT user_name, display_name FROM users WHERE user_id = $1',
            values: [userId]
        }
        const { rows } = await db.query(query)
        let user = rows.length ? rows[0] : false
        if (!user) {
            return false
        }
        return camel.jsonKeyToLowerCamel(user);
    }
}


module.exports = user

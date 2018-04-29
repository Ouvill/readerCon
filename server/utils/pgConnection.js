const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'readerCon',
    password: process.env.DB_PASSWORD,
    port: 5432
})

module.exports=pool

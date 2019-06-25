require('dotenv').config()
const sql = require('mysql')

const conn = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

conn.connect((err) => {
    if (err) {
        throw err
    }else{
        console.log('Terhubung')
    }
})

module.exports = conn
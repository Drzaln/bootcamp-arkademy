require('dotenv').config()
const conn = require('./connect')
const express = require('express')
const app = express()
const bp = require('body-parser')
const port = process.env.SERVER_PORT

app.use(bp.urlencoded({
    urlencoded: false,
}))

app.listen(port)
console.log('Jalan cuy!')

// GET
app.get('/', (req, res) => {
    res.send('Ini endpoint')
})

// // POST
// app.post('/', (req, res) => {
//     const data = {
//         name = req.body.name,
//         phone = req.body.phone,
//         location = req.body.location,
//         create_at = new Date(),
//         update_at = new Date(),
//     }

//     conn.query(`INSERT INTO user SET ?`, data, (err, result) => {
//         if (err) {
//             console.log(err)
//         }else{
//             res.json(result)
//         }
//     })
// })
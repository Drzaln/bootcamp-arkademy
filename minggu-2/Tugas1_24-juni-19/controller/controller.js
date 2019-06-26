const resp = require('../helpers/response')
const conn = require('../config/connect')

exports.booklist = (req, res) => {
    conn.query('SELECT * FROM book', (err, result) => {
        if (err) {
            console.log(err)
        }
        resp.response(res, result, 200)
    })
}

exports.add = (req, res) => {

    const data = {
        nama_buku: req.body.nama_buku,
        penulis: req.body.penulis,
        lokasi: req.body.lokasi,
        kategori: req.body.kategori
    }

    conn.query(
        'INSERT INTO book SET ?', data, (err, result) => {
            if (err) {
                console.log(err)
            }else{
                return res.send({
                    err: false,
                    data: result,
                    message: 'Data sudah dibuat'
                })
            }
        }
    )
}

exports.updatebook = (req, res) => {

    let bookid = req.params.bookid

    const data = {
        nama_buku: req.body.nama_buku,
        penulis: req.body.penulis,
        lokasi: req.body.lokasi,
        kategori: req.body.kategori
    }

    conn.query('UPDATE book SET ? WHERE bookid=?', [data, bookid], (err, result) => {
        if(err)console.log(err)
        return res.send({
            err: false,
            data: result,
            message: 'Data sudah diupdate'
        })
    })
}

exports.remove = (req, res) => {
    let bookid = req.params.bookid

    conn.query('DELETE FROM book WHERE bookid = ?' , bookid, (err, result) => {
        if(err)console.log(err)
        resp.response(res, result, 200)
    })
}

exports.cat = (req, res) => {
    let kat = req.params.kategori

    conn.query('SELECT * FROM book WHERE kategori = ?', kat, (err, result) => {
        if(err)throw err
        resp.response(res, result, 200)
    })
}

exports.loc = (req, res) => {
    let lok = req.params.lokasi

    conn.query('SELECT * FROM book WHERE lokasi = ?', lok, (err, result) => {
        if(err) throw err
        resp.response(res, result, 200)
    })
}

exports.listId = (req, res) => {
    let bookid = req.params.bookid

    conn.query('SELECT * FROM book WHERE bookid = ?', bookid, (err, result) => {
        if(err) console.log(err)
        resp.response(res, result, 200)
    })
}
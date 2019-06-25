const response = require('./response')
const conn = require('./connect')

exports.booklist = (req, res) => {
    conn.query('SELECT * FROM book', (err, result) => {
        if (err) {
            console.log(err)
        }
        response.ok(result, res)
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

    conn.query(
        'UPDATE book SET ? WHERE bookid=?', [data, bookid], (err, result) => {
            if(err) throw err
            res.json(result)
            // res.send({
            //     err:false,
            //     data:result,
            //     message: 'Data sudah diubah'
            // })
        }
    )
}

exports.remove = (req, res) => {
    let bookid = req.body.bookid

    conn.query(
        'DELETE book WHERE bookid=?', bookid, (err, result) => {
            if(err) throw err
            res.json(result)
        }
    )
}
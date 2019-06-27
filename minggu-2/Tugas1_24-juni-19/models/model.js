const conn = require('../config/connect')

module.exports = {
    booklist: (result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM book`, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    listId: (bookid, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM book WHERE bookid = ?`, bookid, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    cat: (kat, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM book WHERE kategori = ?`, kat, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    loc: (lok, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM book WHERE lokasi = ?`, lok, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    add: (data, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO book SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updatebook: (data, bookid, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE book SET ? WHERE bookid=?`, [data, bookid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    remove: (bookid, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM book WHERE bookid = ?` , bookid, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}

module.exports = (app) => {
    const controller = require('../controller/controller')

    // GET
    app.route ('/').get (controller.booklist)
    app.route ('/:bookid').get (controller.listId)
    app.route ('/category/:kategori').get (controller.cat)
    app.route ('/location/:lokasi').get (controller.loc)

    // POST
    app.route ('/').post (controller.add)

    // PATCH
    app.route ('/:bookid').patch (controller.updatebook)

    // DELETE
    app.route ('/:bookid').delete (controller.remove)
}
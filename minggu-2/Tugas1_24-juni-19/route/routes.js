module.exports = (app) => {
    const controller = require('../controller/controller')

    // GET
    app.route ('/').get (controller.booklist)
    app.route ('/filter').get (controller.search)

    // POST
    app.route ('/').post (controller.add)

    // PATCH
    app.route ('/:bookid').patch (controller.updatebook)

    // DELETE
    app.route ('/:bookid').delete (controller.remove)
}
module.exports = (app) => {
    const controller = require('./controller')

    // GET
    app.route ('/').get (controller.booklist)
    // app.route ('/:category').get (controller.users)
    // app.route ('/:location').get (controller.users)

    // POST
    app.route ('/').post (controller.add)

    // PATCH
    app.route ('/:bookid').patch (controller.updatebook)

    // DELETE
    app.route ('/:bookid').delete (controller.remove)
}
try {
    module.exports = function (app) {
        
        app.get('/', function (req, res) {
            app.app.controllers.home.homeControllers(app, req, res)
        })
    }

} catch (error) {
    console.error(error)
}
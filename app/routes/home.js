try {
    module.exports = (app) => {
        app.get('/', (req, res) => {
            app.app.controllers.home.homeControllers(app, req, res)
        })
    }

} catch (error) {
    console.error(error)
}
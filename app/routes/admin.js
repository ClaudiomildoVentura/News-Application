try {
    module.exports = function (app) {

        app.get('/formNoticia', function (req, res) {
            app.app.controllers.admin.formNoticiaControllers(app, req, res)
        })

        app.post('/noticias/salvar', function (req, res) {
            app.app.controllers.admin.noticias_salvarControllers(app, req, res)
        })

    }
} catch (error) {
    console.error(error)
}
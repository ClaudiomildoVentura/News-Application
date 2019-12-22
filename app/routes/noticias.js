try {
    module.exports = function (app) {

        app.get('/noticias', function (req, res) {
            app.app.controllers.noticias.noticiasControllers(app, req, res)
        })

        app.get('/noticia', function (req, res) {
            app.app.controllers.noticias.noticiaControllers(app, req, res)
        })

    }
} catch (error) {
    console.log(error)
}
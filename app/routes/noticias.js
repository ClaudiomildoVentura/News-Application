try {
    module.exports = (app) => {

        app.get('/noticias', (req, res) => {
            app.app.controllers.noticias.noticiasControllers(app, req, res)
        })

        app.get('/noticia', (req, res) => {
            app.app.controllers.noticias.noticiaControllers(app, req, res)
        })

    }
} catch (error) {
    console.log(error)
}
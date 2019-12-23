try {
    module.exports = (app) => {

        app.get('/formNoticia', (req, res) => {
            app.app.controllers.admin.formNoticiasControllers(app, req, res)
        })

        app.post('/noticias/salvar', (req, res) => {
            app.app.controllers.admin.noticiasSalvarControllers(app, req, res)
        })

    }
} catch (error) {
    console.error(error)
}
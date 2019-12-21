try {
    module.exports = (app) => {
        app.get('/formNoticia', (req, res) => {
            res.render("admin/form_add_noticia")
        })

        app.post('/noticias/salvar', (req, res) => {
            var noticia = req.body

            var connection = app.config.ConnectionDatabase() //conexão
            var noticiasModel = new app.app.models.noticiasDAO(connection) //model

            noticiasModel.salvarNoticia(noticia, (error, result) => {
                res.redirect("/noticias")
            })
        })
    }
} catch (error) {
    console.error(error)
}
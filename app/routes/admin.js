try {
    module.exports = (express) => {
        express.get('/formNoticia', (req, res) => {
            res.render("admin/form_add_noticia")
        })

        express.post('/noticias/salvar', (req, res) => {
            var noticia = req.body

            var connection = express.config.ConnectionDatabase() //conexão
            var noticiasModel = express.app.models.noticiasModels //model

            noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
                res.redirect("/noticias")
            })
        })
    }
} catch (error) {
    console.error(error)
}
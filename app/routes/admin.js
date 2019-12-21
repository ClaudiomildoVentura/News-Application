try {
    module.exports = (express) => {
        express.get('/formNoticia', (req, res) => {
            res.render("admin/form_add_noticia")
        })

        express.post('/noticias/salvar', (req, res) => {
            var noticia = req.body

            var connection = express.config.ConnectionDatabase() //conexão
            var noticiasModel = new express.app.models.noticiasDAO(connection) //model

            noticiasModel.salvarNoticia(noticia, (error, result) => {
                res.redirect("/noticias")
            })
        })
    }
} catch (error) {
    console.error(error)
}
/* try {
    module.exports = (app) => {

        app.get('/noticia', (req, res) => {
            
            var connection = app.config.ConnectionDatabase()
            var noticiasModel = new app.app.models.noticiasDAO(connection)


            noticiasModel.getNoticia((error, result) => {
                res.render("noticias/noticia", { noticia: result })
            })
        })
    }
} catch (error) {
    console.log(error)
} */
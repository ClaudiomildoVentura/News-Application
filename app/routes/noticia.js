/* try {
    module.exports = (express) => {

        express.get('/noticia', (req, res) => {
            
            var connection = express.config.ConnectionDatabase()
            var noticiasModel = express.app.models.noticiasModels


            noticiasModel.getNoticia(connection, (error, result) => {
                res.render("noticias/noticia", { noticia: result })
            })
        })
    }
} catch (error) {
    console.log(error)
} */
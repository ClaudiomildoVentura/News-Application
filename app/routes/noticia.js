/* try {
    module.exports = (express) => {

        express.get('/noticia', (req, res) => {
            
            var connection = express.config.ConnectionDatabase()
            var noticiasModel = new express.app.models.noticiasDAO(connection)


            noticiasModel.getNoticia((error, result) => {
                res.render("noticias/noticia", { noticia: result })
            })
        })
    }
} catch (error) {
    console.log(error)
} */
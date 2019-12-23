try {
    module.exports.noticiasControllers = (app, req, res) => {

        var connection = app.config.ConnectionDatabase()
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticiasModel((error, result) => {
            res.render('noticias/noticias', { noticias: result })
        })
    }

    module.exports.noticiaControllers = (app, req, res) => {

        var connection = app.config.ConnectionDatabase() //conexão com o bd estabelecida
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        var id_noticia = req.query  //relativo a passagem de parametro

        noticiasModel.getNoticiasParamsModel(id_noticia, (error, result) => {
            res.render("noticias/noticia", { noticia: result })
        })
    }

} catch (error) {
    console.log(error)
}
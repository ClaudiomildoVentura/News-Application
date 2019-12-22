try {
    module.exports.noticiasControllers = function (app, req, res) {

        var connection = app.config.ConnectionDatabase()
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        })
    }

    module.exports.noticiaControllers = function (app, req, res) {

        var connection = app.config.ConnectionDatabase()
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticia(function (error, result) {
            res.render("noticias/noticia", { noticia: result })
        })
    }

} catch (error) {
    console.log(error)
}
try {
    module.exports = function (app) {

        app.get('/noticias', function (req, res) {

            var connection = app.config.ConnectionDatabase()
            var noticiasModel = new app.app.models.NoticiasDAO(connection)

            noticiasModel.getNoticias(function (error, result) {
                res.render('noticias/noticias', { noticias: result })
            })
        })
    }
} catch (error) {
    console.log(error)
}
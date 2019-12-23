try {
    module.exports.homeControllers = (app, req, res) => {

        var connection = app.config.ConnectionDatabase() //conexão com o bd estabelecida
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.UltimasNoticiasHomeModel((error, result) => {
            res.render("home/home", { noticias: result })
        })
    }

} catch (error) {
    console.log(error)
}
try {
    module.exports.formNoticiasControllers = (app, req, res) => {
        res.render("admin/formNoticia", { validacao: {}, noticia: {} })
    }

    module.exports.noticiasSalvarControllers = (app, req, res) => {

        var noticia = req.body

        /* validation with express validator */
        req.assert('titulo', 'O Título é obrigatório').notEmpty()
        req.assert('resumo', 'O Resumo é obrigatório').notEmpty()
        req.assert('autor', 'O autor é obrigatório').notEmpty()
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracter').len(10, 100)
        //req.assert('data_noticia', 'Data inválida').isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Notícia é essencial e obrigatória').notEmpty()

        var err = req.validationErrors()
        if (err) {
            res.render("admin/formNoticia", { validacao: err, noticia: noticia })
            return
        }

        var connection = app.config.ConnectionDatabase() //conexão com o bd estabelecida
        var noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticiasModel(noticia, (error, result) => {
            res.redirect("/noticias")
        })
    }

} catch (error) {
    console.log(error)
}
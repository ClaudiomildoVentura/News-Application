try {
    module.exports = function (app) {
        app.get('/formNoticia', function (req, res) {
            res.render("admin/form_add_noticia", { validacao: {}, noticia: {} })
        })

        app.post('/noticias/salvar', function (req, res) {
            var noticia = req.body

            /* validation with express validator */
            req.assert('titulo', 'Título é obrigatório').notEmpty()
            req.assert('resumo', 'Resumo é obrigatório').notEmpty()
            req.assert('autor', 'Autor é obrigatório').notEmpty()
            req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracter').len(10, 100)
            //req.assert('data_noticia', 'Data inválida').isDate({format: 'YYYY-MM-DD'});
            req.assert('noticia', 'Notícia é obrigatório').notEmpty()

            var err = req.validationErrors()
            if (err) {
                res.render("admin/form_add_noticia", { validacao: err, noticia: noticia })
                return
            }

            var connection = app.config.ConnectionDatabase() //conexão
            var noticiasModel = new app.app.models.NoticiasDAO(connection)


            noticiasModel.salvarNoticia(noticia, function (error, result) {
                res.redirect("/noticias")
            })
        })
    }
} catch (error) {
    console.error(error)
}
module.exports = (app) => {
    app.get('/formNoticia', function (req, res) {
        res.render("admin/form_add_noticia")
    })
}
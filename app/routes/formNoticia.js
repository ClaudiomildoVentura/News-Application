module.exports = (express) => {
    express.get('/formNoticia', function (req, res) {
        res.render("admin/form_add_noticia")
    })
}
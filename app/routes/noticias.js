module.exports = (express) => {
    express.get('/noticias', function (req, res) {
        res.render("noticias/noticias")
    })
}
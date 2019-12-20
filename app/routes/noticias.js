var db = require('../../config/connection')

module.exports = (express) => {

    try {

        var connection = db()
        express.get('/noticias', function (req, res) {

            connection.query('select * from noticias', (error, result) => {
                res.render("noticias/noticias", { noticias: result })
            })
        })
    } catch (error) {
        console.log(error)
    }
}
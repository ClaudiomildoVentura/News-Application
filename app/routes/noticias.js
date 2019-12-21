try {
    var db = require('../../config/connection')

    module.exports = (express) => {

        var connection = db()
        express.get('/noticias', (req, res) => {

            connection.query('select * from noticias', (error, result) => {
                res.render("noticias/noticias", { noticias: result })
            })
        })
    }
} catch (error) {
    console.log(error)
}
try {
    module.exports = (express) => {

        express.get('/noticias', (req, res) => {
            var connection = express.config.ConnectionDatabase()

            connection.query('select * from noticias', (error, result) => {
                res.render("noticias/noticias", { noticias: result })
            })
        }) 
    }
} catch (error) {
    console.log(error)
}
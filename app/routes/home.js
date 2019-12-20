module.exports = (express) => {
    express.get('/', function (req, res) {
        res.render("home/index")
    })
}
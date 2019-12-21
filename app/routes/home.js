try {
    module.exports = (express) => {
        express.get('/', (req, res) => {
            res.render("home/index")
        })
    }

} catch (error) {
    console.error(error)
}
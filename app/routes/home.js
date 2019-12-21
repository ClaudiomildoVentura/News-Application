try {
    module.exports = (app) => {
        app.get('/', (req, res) => {
            res.render("home/index")
        })
    }

} catch (error) {
    console.error(error)
}
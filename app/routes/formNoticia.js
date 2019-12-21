try {
    module.exports = (express) => {
        express.get('/formNoticia', (req, res) => {
            res.render("admin/form_add_noticia")
        })
    }
} catch (error) {
    console.error(error)
}
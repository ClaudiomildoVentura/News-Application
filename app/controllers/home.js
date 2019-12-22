try {
    module.exports.homeControllers = function (app, req, res) {
        res.render("home/home")
    }

} catch (error) {
    console.log(error)    
}
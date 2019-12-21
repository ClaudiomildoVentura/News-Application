try {
    var app = require('./config/Server')

    app.listen(2000, () => {
        console.log('server On!')
    })
} catch (error) {
    console.error(error)
}
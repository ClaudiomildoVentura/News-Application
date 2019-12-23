try {
    var app = require('./config/Server')

    const port = process.env.PORT || 2000

    app.listen(port, () => {
        console.log(`Server on at localhost!:${port}`)
    })
} catch (error) {
    console.error(error)
}
try {
    var express = require('./config/Server')

    express.listen(2000, () => {
        console.log('server On!')
    })
} catch (error) {
    console.error(error)
}
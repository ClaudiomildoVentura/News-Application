try {
    var express = require('./config/server')

    express.listen(2000, () => {
        console.log('server On!')
    })
} catch (error) {
    console.error(error)
}
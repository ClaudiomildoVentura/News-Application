try {
    var express = require('express')
    var express = express()

    express.set('view engine', 'ejs')
    express.set('views', './app/views')

    module.exports = express

} catch (error) {
    console.error(error)
}

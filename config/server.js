try {
    var express = require('express')
    var consign = require('consign')
    var bodyParser = require('body-parser')

    var express = express()

    express.set('view engine', 'ejs')
    express.set('views', './app/views')

    express.use(bodyParser.urlencoded({ extended: true }))

    consign()
        .include('app/routes')
        .then('config/ConnectionDatabase.js')
        .then('app/models')
        .into(express)

    module.exports = express

} catch (error) {
    console.error(error)
}
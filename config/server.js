try {
    var express = require('express')
    var consign = require('consign')
    var bodyParser = require('body-parser')
    var expressValidator = require('express-validator') // V.@5.3.0
    var app = express()

    app.set('view engine', 'ejs')
    app.set('views', './app/views')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(expressValidator())
 
    consign()
        .include('app/routes')
        .then('config/ConnectionDatabase.js')
        .then('app/controllers')
        .then('app/models')
        .into(app)

    module.exports = app

} catch (error) {
    console.error(error)
}
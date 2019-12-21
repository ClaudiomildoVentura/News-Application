try {
    var express = require('express')
    var consign = require('consign')

    var express = express()

    express.set('view engine', 'ejs')
    express.set('views', './app/views')

    consign().include('app/routes')
    .then('config/connection.js')
    .into(express)

    module.exports = express

} catch (error) {
    console.error(error)
}
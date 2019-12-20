var app = require('./config/server')

require('./app/routes/formNoticia')(app)

require('./app/routes/noticias')(app)

require('./app/routes/home')(app)

app.listen(2000, function () {
    console.log('server On!')
})
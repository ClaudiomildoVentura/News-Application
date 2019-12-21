var express = require('./config/server')

require('./app/routes/formNoticia')(express)

require('./app/routes/noticias')(express)

require('./app/routes/home')(express)

express.listen(2000, () => {
    console.log('server On!')
})
try {
    var mysql = require('mysql')
    var connMySQL = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal'
        })
    }
    module.exports = () => {
        return connMySQL
    }
} catch (error) {
    console.error(error)
}
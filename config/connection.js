var mysql = require('mysql')

try {
    module.exports = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal'
        })
    }
} catch (error) {
    console.error(error)
}
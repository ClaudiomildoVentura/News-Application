try {
    module.exports = () => {
        
        this.getNoticias = (connection, callback) => {
            connection.query('select * from noticias', callback)
        }
       /*  this.getNoticia = (connection, callback) => {
            connection.query('select * from noticias where id_noticia = ?', callback)
        } */
        return this
    }
} catch (error) {
    console.log(error)
}
try {
    function NoticiasDAO(connection) {
        this._connection = connection
    }

    NoticiasDAO.prototype.getNoticiasModel = function (callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback)
    }

    NoticiasDAO.prototype.getNoticiasParamsModel = function (id_noticia, callback) {
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
    }

    NoticiasDAO.prototype.salvarNoticiasModel = function (noticia, callback) {
        this._connection.query('INSERT INTO noticias SET ?', noticia, callback)
    }

    NoticiasDAO.prototype.UltimasNoticiasHomeModel = function (noticia, callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', noticia, callback)
    }

    module.exports = () => {
        return NoticiasDAO
    }

} catch (error) {
    console.log(error)
}
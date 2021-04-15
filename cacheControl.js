module.exports = {
    cacheControl: function(req, res, next) {
        res.header('Cache-Control', 'public, max-age=3600')
        res.removeHeader('Pragma')
            next()
    }
}
var config = require('./app-config')
const routes = config.server.routes

module.exports = function(app){
    routes.forEach(r => {
        app.use(r.path, require(r.route))
    })
}

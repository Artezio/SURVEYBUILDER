const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(['/Questionnaire'], {
        target: "http://hapi.fhir.org/baseDstu3",
        changeOrigin: true,
        logLevel: 'debug'
    }))
}
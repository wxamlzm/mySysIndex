const menuRouter = require('./menu')

module.exports = app => {
    app.use('/menu', menuRouter)
}
const express = require('express')
const mongo = require('./config/db')
const routes = require('./router')
const app = new express()

app.use(express.urlencoded({extended:false}))

mongo(app)

routes(app)

app.listen(3000, () => {
    console.log('server listen at 3000')
})


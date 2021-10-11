const mongoose = require('mongoose')
const { Schema, model } = mongoose

const MenuSchema = new Schema({
    id: { type: Number, require: true },
    authName: { type: String, require: true },
    path: { type: String, require: true },
    children: { type: Array, require: true }
})

const Menu = model('Menu', MenuSchema)
module.exports = Menu

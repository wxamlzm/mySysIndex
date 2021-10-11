const express = require('express')
const router = express.Router()
const Menu = require('../model/Menu')

router.get('/', async (req, res) => {
    const list = await Menu.find()
    res.send(list)
})

router.post('/add', async (req, res) => {
    console.log(req.body)
    const menu = await Menu.findOne({id: req.body.id})
    if(menu){ return res.status(409).send('表单已存在')}
    const newMenu = await new Menu(req.body).save()

    res.send(newMenu)
})

module.exports = router
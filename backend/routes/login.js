const user = require('../models/users')
const Joi = require('joi')
const express = require('express')
const { compare } = require('bcrypt')
const router = express.Router()

router.post('/', async (req, res) => {

    const User = await user.findOne({ email: req.body.email })
    if (!User) {
        return res.send(false)
    } else {
        if (req.body.password === User.password) {
            res.json({User})
            console.log(User)
        } else {
            return res.send(false)
        }
    }

})

module.exports = router
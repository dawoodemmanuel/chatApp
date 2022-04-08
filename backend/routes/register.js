const user = require('../models/users')
const Joi = require('joi')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {

    const schema = Joi.object({
        username: Joi.string().max(20).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(8).max(1024).required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    } else {
        let User = await user.findOne({
                email: req.body.Email
        })
        if (User) {
            res.send(false)
            console.log("This Email is already Exist")
        } else {
            let User = new user({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            await User.save()
            console.log(User)
            res.send(true)
        }
    }
})

module.exports = router
const express = require('express')
const user = require('../models/users')
const router = express.Router()

router.get('/', async (req, res)=> {
    const users = await user.find({_id: {$ne: req.query.id}}).select([
        "email",
        "username",
        "_id",
      ])
    return res.json(users)
}) 

module.exports = router
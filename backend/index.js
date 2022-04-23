const express = require('express')
const connection = require('./models/connection')
const cors = require('cors')
const app = express()
const register = require('./routes/register')
const login = require('./routes/login')
const contacts = require('./routes/contact')

app.use(cors({
    origin: ["http://localhost:3000/"],
    methods: ["GET", "POST"],
    credentials: true,
  }))
app.use(express.json())

app.use('/register', register)
app.use('/login', login)
app.use('/contact/', contacts)

app.get("/", (req, res)=> {
    res.send("Welcome to our Api")
})


app.listen(8000, ()=> {
    console.log(`Server is up on 8000`)
    console.log(`${connection}`)
})



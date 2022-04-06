const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb+srv://dawoodromeo:Dawood1998@dawoodcluster.y4k1u.mongodb.net/ChatApp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("Successfully Connected with Mongodb Atlas")
})
.catch((error)=> {
    console.log(error)
})

module.exports = connection
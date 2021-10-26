const mongoose = require('mongoose')

const connection = 'mongodb+srv://admin:adminwa7edbas@cluster0.hz4bc.mongodb.net/TASKMANAGER?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose.connect(connection,{useNewUrlParser:true,UserCreateIndex:true,useFindAndModify:true,useUnifiedTopology:true})
}

module.exports = connectDB
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

// Connect to DB
const connectDB = require('./db/connect')


// Middleware
app.use(express.json())


app.use(express.static('./public'))
// Routes
app.use('/api/v1/tasks',tasks)
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
 
const port = 3000

const start = async () =>{
    try{
        await connectDB()
        app.listen(port,console.log(port))
        console.log("Connected")

    }
    catch (error){
        console.log(error)
    }
}

start()
// use this to startup mongodb server: /DDevStuff/mongoDB/mongodb/bin/mongod.exe --dbpath=/DDevStuff/mongoDB/mongodb
// use this to startup local host: npm run dev

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
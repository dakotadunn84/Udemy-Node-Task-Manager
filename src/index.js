// use this to startup mongodb server: /DDevStuff/mongoDB/mongodb/bin/mongod.exe --dbpath=/DDevStuff/mongoDB/mongodb
// use this to startup local host: npm run dev

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5e292da94512b161308c9513')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5e292c9e9857e268a4db230a')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()
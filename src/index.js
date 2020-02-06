// use this to startup mongodb server: /DDevStuff/mongoDB/mongodb/bin/mongod.exe --dbpath=/DDevStuff/mongoDB/mongodb
// use this to startup local host: npm run dev

const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
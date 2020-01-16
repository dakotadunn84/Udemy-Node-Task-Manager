const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dc76d1134f801300888e4ef').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count 
}

deleteTaskAndCount('5dc85506229da33d0060e7c1').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
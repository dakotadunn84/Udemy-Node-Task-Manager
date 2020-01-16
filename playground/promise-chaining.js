const mongoose = require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5dc77b9d301fce58c0fb093f', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count 
}

updateAgeAndCount('5dc77b9d301fce58c0fb093f', 723).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
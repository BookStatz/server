const mongoose  = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Event = mongoose.model('event', eventSchema)

module.exports = Event
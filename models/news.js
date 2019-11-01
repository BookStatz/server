const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newsSchema = new Schema({
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

const News = mongoose.model('News', newsSchema)

module.exports = News
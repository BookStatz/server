const mongoose  = require('mongoose')
const Schema = mongoose.Schema

let newsSchema = new Schema ({
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

const News = mongoose.model('News', newsSchema)

module.exports = News
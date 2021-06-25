const mongoose = require('mongoose')

const TastSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Must provide a name"],
        trim: true,
        maxLength: [20,'Name must be less than 20 char']
    },
    compleated: { 
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Task', TastSchema)
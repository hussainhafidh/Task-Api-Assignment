const db = require("mongoose");

const taskSchema = new db.Schema({
    title: {
        type: String,
        required: true
    },
    is_completed: {
        type: Boolean,
        default: false
    }

   
})

module.exports = mongoose.model(Tasks, taskSchema)
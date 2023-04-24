const db = require("mongoose");

const taskSchema = new db.Schema({
    tasks: {
        type: String,
        required: true
    }

   
})

const taskModel = db.model("task", taskSchema);
module.exports = taskModel;
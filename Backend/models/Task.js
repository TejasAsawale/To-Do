const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Task title required Please'],trim: true},
    description: { type: String },
    status: { type: String, default: "pending" },
    dueDate: { type: Date },
    priority: { type: String, default: "normal" },
    category: { type: String },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Task', TaskSchema);

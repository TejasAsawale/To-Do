const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'task title is required'],
        required:true,
        trim:true,
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        required:true,
    },
    priority: {
        type: String,
        enum: ['extreme', 'moderate', 'low'],
        required:true,
        default: 'moderate',
    },
    taskDescription: {
        type: String,
        required: [true, 'Task description is required'],
        trim: true,
    },
    image: {
        type: String, 
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const Task = mongoose.model('Task',taskSchema);
module.exports = Task;

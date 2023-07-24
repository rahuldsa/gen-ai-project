// models/task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['To Do', 'In Progress', 'Completed'], required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

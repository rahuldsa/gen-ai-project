// models/resource.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' } // One-to-many relationship with Task
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;

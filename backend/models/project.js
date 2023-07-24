// models/project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['Planned', 'In Progress', 'Completed'], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'PortfolioManager', required: true },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;



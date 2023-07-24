// models/portfolioManager.js

const mongoose = require('mongoose');

const portfolioManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['Administrator', 'Viewer'],
    },
    bio: String,
    startDate: {
        type: Date,
        required: true,
    },
});

const PortfolioManager = mongoose.model('PortfolioManager', portfolioManagerSchema);

module.exports = PortfolioManager;

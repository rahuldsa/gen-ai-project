// controllers/portfolioManagerController.js

const PortfolioManager = require('../models/portfolioManager');

// Controller functions for CRUD operations on Portfolio Manager
exports.getAllPortfolioManagers = async (req, res) => {
    try {
        const portfolioManagers = await PortfolioManager.find();
        res.json(portfolioManagers);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Implement other CRUD operations (getPortfolioManagerById, createPortfolioManager, updatePortfolioManager, deletePortfolioManager) here.

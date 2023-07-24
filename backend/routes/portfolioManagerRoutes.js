// routes/portfolioManagerRoutes.js

const express = require('express');
const router = express.Router();
const portfolioManagerController = require('../controllers/portfolioManagerController');

// Get all portfolio managers
router.get('/', portfolioManagerController.getAllPortfolioManagers);

// Get a specific portfolio manager by ID
router.get('/:id', portfolioManagerController.getPortfolioManagerById);

// Create a new portfolio manager
router.post('/', portfolioManagerController.createPortfolioManager);

// Update a specific portfolio manager by ID
router.put('/:id', portfolioManagerController.updatePortfolioManager);

// Delete a specific portfolio manager by ID
router.delete('/:id', portfolioManagerController.deletePortfolioManager);

module.exports = router;

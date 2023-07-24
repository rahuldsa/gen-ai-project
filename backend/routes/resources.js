// routes/resources.js
const express = require('express');
const resourceRouter = express.Router();
const Resource = require('../models/resource');

// Create a new resource
resourceRouter.post('/', async (req, res) => {
    try {
        const resource = await Resource.create(req.body);
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create the resource.', error });
    }
});

// Get all resources
resourceRouter.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get resources.', error });
    }
});

// Get a single resource by ID
resourceRouter.get('/:id', async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get the resource.', error });
    }
});

// Update a resource by ID
resourceRouter.put('/:id', async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update the resource.', error });
    }
});

// Delete a resource by ID
resourceRouter.delete('/:id', async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found.' });
        }
        res.status(200).json({ message: 'Resource deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete the resource.', error });
    }
});

module.exports = resourceRouter;

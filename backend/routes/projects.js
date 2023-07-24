const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Task = require('../models/task'); // Import the Task model

// Create a new project
router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create the project.', error });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('manager', 'name'); // Populate manager's name from PortfolioManager model
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get projects.', error });
    }
});

// Get a single project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('manager', 'name');
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get the project.', error });
    }
});

// Update a project by ID
router.put('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('manager', 'name');
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update the project.', error });
    }
});

// Delete a project by ID
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.status(200).json({ message: 'Project deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete the project.', error });
    }
});

module.exports = router;

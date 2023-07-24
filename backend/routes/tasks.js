const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Project = require('../models/project'); // Import the Project model

// Add a new task to a project
router.post('/:projectId/tasks', async (req, res) => {
    const { name, status } = req.body;
    const projectId = req.params.projectId;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const task = new Task({ name, status, project: projectId });
        await task.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ...

module.exports = router;

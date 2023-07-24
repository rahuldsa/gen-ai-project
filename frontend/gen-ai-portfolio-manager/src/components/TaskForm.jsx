// TaskForm.js

import React, { useState } from 'react';
import { createTask } from '../api';

const TaskForm = ({ projectId }) => {
    const [formData, setFormData] = useState({
        name: '',
        status: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask(projectId, formData);
            setFormData({ name: '', status: '' });
        } catch (error) {
            // Handle API call error (show error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name:
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </label>
            <label>
                Status:
                <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                    <option value="">Select Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

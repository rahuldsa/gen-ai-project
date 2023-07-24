// ProjectForm.js

import React, { useState } from 'react';
import { createProject } from '../api';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        status: '',
        startDate: '',
        endDate: '',
        manager: '', // This should be the ID of the selected Portfolio Manager
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the API call to create a new Project
            await createProject(formData);
            // Clear the form after successful submission (you can also show a success message)
            setFormData({
                name: '',
                status: '',
                startDate: '',
                endDate: '',
                manager: '',
            });
        } catch (error) {
            // Handle API call error (show error message, etc.)
        }
    };

    // Fetch the list of Portfolio Managers from the server (you'll need to create this API call)
    // Populate a dropdown/select input with the names of Portfolio Managers and set the selected manager ID in formData

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Status:
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Planned">Planned</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </label>
            <label>
                End Date:
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            </label>
            <label>
                Manager:
                <select name="manager" value={formData.manager} onChange={handleChange}>
                    {/* Populate this dropdown with the names of Portfolio Managers */}
                    <option value="">Select Manager</option>
                    {/* Use map() to render the options */}
                    {/* <option value={manager._id}>{manager.name}</option> */}
                </select>
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default ProjectForm;

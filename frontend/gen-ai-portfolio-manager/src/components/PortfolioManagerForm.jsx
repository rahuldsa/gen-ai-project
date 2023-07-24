import React, { useState } from 'react';
import { createPortfolioManager } from '../api'; // Add this import statement
import "./PortfolioManager.css"

const PortfolioManagerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        status: '',
        role: '',
        bio: '',
        startDate: '',
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
            // Make the API call to create/update Portfolio Manager
            await createPortfolioManager(formData);
            // Clear the form after successful submission (you can also show a success message)
            setFormData({
                name: '',
                status: '',
                role: '',
                bio: '',
                startDate: '',
            });
        } catch (error) {
            // Handle API call error (show error message, etc.)
        }
    };

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
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </label>
            <label>
                Role:
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Viewer">Viewer</option>
                </select>
            </label>
            <label>
                Bio:
                <textarea name="bio" value={formData.bio} onChange={handleChange} />
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default PortfolioManagerForm;

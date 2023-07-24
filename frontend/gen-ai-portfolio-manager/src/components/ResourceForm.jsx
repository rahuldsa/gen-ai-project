// ResourceForm.js
import React, { useState } from 'react';
import { createResource } from '../api';

const ResourceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createResource(formData);
            setFormData({
                name: '',
                type: '',
                description: ''
            });
        } catch (error) {
            // Handle API call error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Resource Name"
                required
            />
            {/* Other input fields for type and description */}
            <button type="submit">Create Resource</button>
        </form>
    );
};

export default ResourceForm;

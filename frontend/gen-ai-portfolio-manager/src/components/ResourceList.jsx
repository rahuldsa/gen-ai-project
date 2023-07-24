// ResourceList.js
import React, { useEffect, useState } from 'react';
import { getResources } from '../api';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await getResources();
            setResources(response.data);
        } catch (error) {
            // Handle API call error
        }
    };

    return (
        <div>
            <h2>Resources</h2>
            <ul>
                {resources.map((resource) => (
                    <li key={resource._id}>{resource.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;

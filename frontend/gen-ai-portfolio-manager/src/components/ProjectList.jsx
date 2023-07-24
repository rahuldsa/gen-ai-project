// ProjectList.js

import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the list of projects from the server
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                // Handle API call error (show error message, etc.)
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Project List</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <strong>{project.name}</strong> - {project.status} - Manager: {project.manager.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;

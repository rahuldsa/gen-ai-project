// TaskList.js

import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';

const TaskList = ({ projectId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks(projectId);
                setTasks(data);
            } catch (error) {
                // Handle API call error (show error message, etc.)
            }
        };

        fetchTasks();
    }, [projectId]);

    return (
        <div>
            <h2>Task List for Project</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <strong>{task.name}</strong> - Status: {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

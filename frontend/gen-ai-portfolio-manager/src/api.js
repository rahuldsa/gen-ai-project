import axios from 'axios';

const BASE_URL = 'http://localhost:4500/api'; // Replace with your actual backend URL

// Create a new Portfolio Manager
export const createPortfolioManager = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/portfolioManagers`, formData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating Portfolio Manager.');
    }
};

// Create a new Project
export const createProject = async (projectData) => {
    try {
        const response = await axios.post(`${BASE_URL}/projects`, projectData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating Project.');
    }
};

// Get all Projects
export const getProjects = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/projects`);
        return response.data;
    } catch (error) {
        throw new Error('Error getting Projects.');
    }
};

// Create a new Task for a Project
export const createTask = async (projectId, taskData) => {
    try {
        const response = await axios.post(`${BASE_URL}/projects/${projectId}/tasks`, taskData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating Task.');
    }
};

// Get all Tasks for a Project
export const getTasks = async (projectId) => {
    try {
        const response = await axios.get(`${BASE_URL}/projects/${projectId}/tasks`);
        return response.data;
    } catch (error) {
        throw new Error('Error getting Tasks.');
    }
};

// Create a new Resource for a Task
export const createResource = async (taskId, resourceData) => {
    try {
        const response = await axios.post(`${BASE_URL}/tasks/${taskId}/resources`, resourceData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating Resource.');
    }
};

// Get all Resources for a Task
export const getResources = async (taskId) => {
    try {
        const response = await axios.get(`${BASE_URL}/tasks/${taskId}/resources`);
        return response.data;
    } catch (error) {
        throw new Error('Error getting Resources.');
    }
};

import axios from 'axios';

const BASE_URL = 'https://your-api-endpoint.com/projects'; 

const getProjects = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        // Handle the error appropriately
    } 
};

export default { getProjects };
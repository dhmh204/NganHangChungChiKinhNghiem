import axios from 'axios';
const httpRequest = axios.create({
    baseURL: '/job-portal/api/', 
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
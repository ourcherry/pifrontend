import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://192.168.0.27:5000'; // raspberry pi

// Create Axios instance
export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseURL || 'http://localhost:5173',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

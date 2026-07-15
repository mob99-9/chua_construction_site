
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "";

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' // Forces Laravel to return JSON errors instead of HTML redirects
    }
});

// Request Interceptor: Appends JWT if available
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response Interceptor: Catches global errors (like token expiration)
axiosClient.interceptors.response.use(
    (response) => {
        return response; 
    }, 
    (error) => {
        // Safe check: If server responded with a status
        if (error.response) {
            const { status } = error.response;
            
            if (status === 401) {
                localStorage.removeItem('ACCESS_TOKEN');
                // Optional: window.location.href = '/login';
            }
        } else {
            // Handles network errors (e.g., server is down)
            console.error('Network/Server error:', error.message);
        }

        return Promise.reject(error); // Keep using Promise.reject so component catch blocks still trigger
    }
); 

export default axiosClient;
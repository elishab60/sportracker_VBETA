import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Assurez-vous que l'URL correspond à votre backend

const register = async (firstname: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { firstname, email, password });
    return response.data;
};

const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

const getCurrentUser = () => {
    // Implémentez la logique pour récupérer l'utilisateur actuellement connecté si nécessaire
    return null;
};

const logout = () => {
    // Implémentez la logique de déconnexion si nécessaire
};

export default {
    register,
    login,
    getCurrentUser,
    logout,
};

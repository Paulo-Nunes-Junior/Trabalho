import axios from 'axios';
import type { LoginData } from '../interfaces/LoginData';

const apiClient = axios.create({
    baseURL: 'https://pqg3p1fp-7029.brs.devtunnels.ms/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const LoginAPI = (loginData: LoginData) => {
    return apiClient.post('/api/Login/login', loginData)
}

export const FetchShareBySymbol = async (symbol: string) => {
    try{
        const response = await apiClient.get(`/Share/${symbol}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
        });
        return response;
    } catch (error) {
        console.error("Error fetching share by symbol:", error);
        throw error;
    }
}

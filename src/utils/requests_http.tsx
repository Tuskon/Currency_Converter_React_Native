import axios from "axios";
import { API_URL } from "../config/consts";

axios.defaults.withCredentials = true;

export const Get = async (url: string, params?: any) => {
    try {
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.get(`${API_URL}${url}`, { headers, params });
        return response.data;
    } catch (error: any) {
        console.log(error)
        throw {
            status: error?.response?.status || 500,
            data: error?.response?.data || 'Erro desconhecido',
        };
    }
};

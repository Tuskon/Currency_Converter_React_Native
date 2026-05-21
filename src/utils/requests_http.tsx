import axios from "axios";
import { API_COUNTRYS, API_CURRENCYS } from "@config/consts";

axios.defaults.withCredentials = true;

export const Get = async (url: string, params?: any, countryAPI?: boolean) => {
    try {
        let API = countryAPI ? API_COUNTRYS : API_CURRENCYS
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.get(`${API}${url}`, { headers, params });
        console.log(`${API}${url}`)
        return response.data;
    } catch (error: any) {
        throw {
            status: error?.response?.status || 500,
            data: error?.response?.data || 'Erro desconhecido',
        };
    }
};

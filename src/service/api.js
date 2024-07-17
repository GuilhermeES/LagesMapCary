import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API,
});

export async function post(endpoint, body = null, token = null) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        const response = await api.post(endpoint, body, token ? config : {});
        return response.data;
    } catch (e) {
        console.error(e);
        throw e; 
    }
}
import { api } from "./baseUrl";

export const GetProducts = async () => {
    try {
        // const response = await api.get('products?page=1&limit=10');
        const response = await api.get('products?page=1');
        console.log(response.data);
        return response.data;
    } catch (error) {
        alert('Erro ao buscar os produtos');
    }
}
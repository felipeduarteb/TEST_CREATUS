import { api } from "./BaseUrl";

export const GetProducts = async () => {
    try {
        const response = await api.get('products?');
        return response.data;
    } catch (error) {
        alert('Erro ao buscar os produtos');
    }
}
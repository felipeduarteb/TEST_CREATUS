import { api } from './BaseUrl';

export const GetMoreProducts = async (page) => {
    try {
        const response = await api.get(`products?page=${page}`);
        return response.data;
    } catch (error) {
        alert('Erro ao buscar os produtos');
    }
}
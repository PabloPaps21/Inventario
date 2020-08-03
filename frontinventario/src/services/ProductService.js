import axios from 'axios';

export default class ProductService {
    baseUrl="http://localhost:3000/";

    products = axios.create({
        baseURL: this.baseUrl,
        withCredentials: true
    })

    getProductos() {
        return this.products.get('api/ver');
    }

    createProduct(data) {
        return this.products.post('api/products', data);
    }
}
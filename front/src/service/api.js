import axios from 'axios';


const userApi = axios.create({
    baseURL: "http://localhost:8080/user"
});

const stockApi = axios.create({
    baseURL: "http://localhost:8080/stock"
});

const stockPurchaseApi = axios.create({
    baseURL: "http://localhost:8080/stockPurchase"
});

// Exportando os metodos
export { userApi, stockApi, stockPurchaseApi };

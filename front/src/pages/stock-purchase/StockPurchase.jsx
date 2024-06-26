import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { stockPurchaseApi } from "../../service/api";
import './StockPurchase.css';
import { useNavigate, useLocation } from "react-router-dom";

const StockPurchase = () => {
    const location = useLocation();
    const stockPurchase = location.state ? location.state.stockPurchase : null;

    // Pegando userId do localStorage
    const userId = localStorage.getItem('userId');

    const [stocks, setStocks] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: 0,
        userId: userId,
        symbol: '',
        companyName: '',
        quantity: 0,
        stockValue: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            if (stockPurchase) {
                document.getElementById('form-container-title').innerText = 'Editar compra';

                document.getElementById('companyName').value = stockPurchase.stockName;
                document.getElementById('quantity').value = stockPurchase.qtd;
                document.getElementById('stockValue').value = stockPurchase.stockValue;

                setFormData({
                    id: stockPurchase.id,
                    userId: userId,
                    symbol: stockPurchase.symbol,
                    companyName: stockPurchase.stockName,
                    quantity: stockPurchase.qtd,
                    stockValue: stockPurchase.stockValue
                });
            }

            try {
                const response = await stockPurchaseApi.get('http://localhost:8080/stock');
                setStocks(response.data);
                if (stockPurchase) {
                    document.getElementById('symbol').value = stockPurchase.symbol;
                }
            } catch (error) {
                console.error("Erro ao buscar dados de ações:", error);
            }
        };
        fetchData();
    }, [stockPurchase, userId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        const selectedStock = stocks.find(stock => stock.stock === value);
        setFormData({ ...formData, [name]: value, companyName: selectedStock ? selectedStock.name : '' });
        document.getElementById('companyName').value = selectedStock ? selectedStock.name : '';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (stockPurchase) {
                await stockPurchaseApi.put(`http://localhost:8080/stockPurchase/${userId}/${stockPurchase.id}`, formData);
            } else {
                await stockPurchaseApi.post(`http://localhost:8080/stockPurchase/${userId}`, formData);
            }
            navigate('/home');
        } catch (error) {
            console.error("Erro ao salvar compra de ação:", error);
        }
    };

    const isAllFieldsFilled = () => {
        const { symbol, companyName, quantity, stockValue } = formData;
        return symbol && companyName && quantity > 0 && stockValue > 0;
    };

    return (
        <div className="stock-purchase">
            <Header />
            <div className="container-main">
                <div className="form-container">
                    <span style={{ fontSize: '32px', fontStyle: "italic" }} id="form-container-title">Cadastrar nova compra</span>
                    <div className="inputs">
                        <div className="input-label">
                            <label htmlFor="symbol">Símbolo</label>
                            <select name="symbol" id="symbol" onChange={handleSelectChange} required>
                                {stocks.map((stock) => (
                                    <option key={stock.id} value={stock.stock}>{stock.stock}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-label">
                            <label htmlFor="companyName">Nome da empresa</label>
                            <input type="text" id="companyName" name="companyName" placeholder="Qual o nome da empresa?" onChange={handleInputChange} disabled />
                        </div>
                        <div className="input-label">
                            <label htmlFor="quantity">Quantia comprada</label>
                            <input type="number" id="quantity" name="quantity" placeholder="Quantas ações você comprou?" onChange={handleInputChange} />
                        </div>
                        <div className="input-label">
                            <label htmlFor="stockValue">Valor da ação</label>
                            <input type="number" id="stockValue" name="stockValue" placeholder="Qual o valor Unitario da ação?" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="/home">
                            <button type="button" className="button-cancel">Cancelar</button>
                        </a>
                        <button className="button-save" onClick={handleSubmit} disabled={!isAllFieldsFilled()}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockPurchase;

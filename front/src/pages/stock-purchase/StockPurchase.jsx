import Header from "../../components/header/Header";
import './StockPurchase.css';
import calendarIcon from "../../assets/fi-rr-calendar.svg";
import { useState } from "react";
import { stockPurchaseApi } from "../../service/api";

// TODO: Transformar os inputs em componentes para reutilização

const StockPurchase = () => {

    const [formData, setFormData] = useState({
        symbol: '',
        companyName: '',
        quantity: 0,
        stockValue: 0,
        purchaseDate: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            stockPurchaseApi.post('/stockPurchase', formData)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="stock-purchase">
            <Header />
            <div className="container-main">
                <div className="form-container">
                    <span style={{ fontSize: '32px', fontStyle: "italic" }}>Cadastrar nova compra</span>
                    <div className="inputs">
                        <div className="input-label">
                            <label htmlFor="symbol">Símbolo</label>
                            <input type="text" id="symbol" name="symbol" placeholder="Qual o símbolo da ação? Ex: PETR4, PETZ3, MXRF11..." onChange={handleInputChange} />
                        </div>
                        <div className="input-label">
                            <label htmlFor="companyName">Nome da empresa</label>
                            <input type="text" id="companyName" name="companyName" placeholder="Qual o nome da empresa?" onChange={handleInputChange} />
                        </div>
                        <div className="input-label">
                            <label htmlFor="quantity">Quantia comprada</label>
                            <input type="number" id="quantity" name="quantity" placeholder="Quantas ações você comprou?" onChange={handleInputChange} />
                        </div>
                        <div className="input-label">
                            <label htmlFor="stockValue">Valor da ação</label>
                            <input type="number" id="stockValue" name="stockValue" placeholder="Qual o valor Unitario da ação?" onChange={handleInputChange} />
                        </div>
                        <div className="input-label">
                            <label htmlFor="purchaseDate">
                                Data da compra
                            </label>
                            <div className="date-input">
                                <input type="date" id="purchaseDate" name="purchaseDate" />
                                <img src={calendarIcon} alt="Calendário" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="/home">
                            <button type="button" className="button-cancel">Cancelar</button>
                        </a>

                        <button className="button-save" onClick={handleSubmit}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default StockPurchase;
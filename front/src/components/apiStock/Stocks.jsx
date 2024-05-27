import { useEffect, useState } from "react";
import { stockApi } from "../../service/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stocks.css'

const Stocks = () => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await stockApi.get();
                setStocks(response.data);
                console.log(stocks)
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="stock-table">
            <table className="stock-table table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Simbolo</th>
                        <th>Nome da empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((item) => (
                        <tr key={item.id}>
                            <td>{item.symbol}</td>
                            <td>{item.companyName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Stocks
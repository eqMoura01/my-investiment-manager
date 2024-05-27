import { stockPurchaseApi } from "../../service/api";
import { useEffect, useState } from "react";

const StockPurchases = () => {
    const [stockPurchases, setStockPurchases] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await stockPurchaseApi.get();
                setStockPurchases(response.data);
                console.log(stockPurchases)
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table className="stock-table table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Simbolo</th>
                        <th>Nome da empresa</th>
                        <th>Data da compra</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {stockPurchases.map((item) => (
                        <tr key={item.stock.id}>
                            <td>{item.stock.symbol}</td>
                            <td>{item.stock.companyName}</td>
                            <td>{item.date}</td>
                            <td>R$ {item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default StockPurchases
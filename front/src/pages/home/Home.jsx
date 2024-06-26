import React, { useEffect, useState } from "react";
import removeIcon from '../../assets/remove.png';
import CardStock from "../../components/card-stock/CardStock";
import Header from "../../components/header/Header";
import { stockPurchaseApi } from "../../service/api";
import './Home.css';

const Home = () => {

  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await stockPurchaseApi.get(`http://localhost:8080/stockPurchase/${userId}`);
        setPurchasedStocks(response.data);

        if (response.data.length > 0) {
          let total = 0;
          response.data.forEach(stock => {
            total += stock.stockValue * stock.quantity;
          });
          setTotalValue(total.toFixed(2));
        }
      } catch (error) {
        console.error("Erro ao buscar compras de ações:", error);
      }
    };
    fetchData();
  }, [purchasedStocks]);

  const handleDelete = async (stockId) => {
    try {
      const response = await stockPurchaseApi.delete(`http://localhost:8080/stockPurchase/${localStorage.getItem('userId')}/${stockId}`);
      console.log(response);

      if (response.status === 200) {
        setPurchasedStocks(purchasedStocks.filter((purchase) => purchase.id !== stockId));
      }
    } catch (error) {
      console.error("Erro ao excluir compra de ação:", error);
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="container-home">
        <div className="container-carteira">
          <div>
            <span className="wallet-label">
              Valor da carteira em ações:
            </span><br />
            <span className="wallet-value" id="wallet-value">
              {purchasedStocks.length > 0 ? `R$ ${totalValue}` : `R$ 0`}
            </span>
          </div>

          <div className="container-stocks">
            <span className="label-stocks">
              Ações compradas
            </span>

            <div className="cards-row">
              {purchasedStocks.map(stock => (
                <div key={stock.id} className="card-stock-teste">
                  <CardStock id={stock.id} symbol={stock.symbol} stockName={stock.companyName} stockValue={stock.stockValue} qtd={stock.quantity} />
                  <img className="remove-icon" src={removeIcon} alt="Remove" onClick={() => handleDelete(stock.id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import CardStock from "../../components/card-stock/CardStock";
import Header from "../../components/header/Header";
import './Home.css';
import { useState } from "react";
import { stockPurchaseApi } from "../../service/api";

const Home = () => {

  const [purchasedStocks, setPurchasedStocks] = useState([])
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await stockPurchaseApi.get('http://localhost:8080/stockPurchase');
      setPurchasedStocks(response.data);

      if (response.data.length > 0) {
        let total = 0;
        response.data.forEach(stock => {
          total += stock.stockValue * stock.quantity;
        });
        setTotalValue(total.toFixed(2));
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container-home">
        <div className="container-carteira">
          <div>
            {/* Texto acima do container */}
            <span className="wallet-label">
              Valor da carteira em ações:
            </span><br />
            <span className="wallet-value" id="wallet-value">
              {purchasedStocks.length > 0 ? `R$ ${totalValue}` : `Carregando dados...`}
            </span>
          </div>

          {/* Container */}
          <div className="container-stocks">
            <span className="label-stocks">
              Ações compradas
            </span>

            <div className="cards-row">
              {/* TODO: Criar componente para o card de ação */}
              {purchasedStocks.map(stock => (
                <CardStock key={stock.id} id={stock.id} symbol={stock.symbol} stockName={stock.companyName} stockValue={stock.stockValue} qtd={stock.quantity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
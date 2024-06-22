import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CardStock.css';

const CardStock = (props) => {

    const navigate = useNavigate();

    const [stockPurchase, setStockPurchase] = useState([])

    const handleClick = (stockPurchase) => {
        console.log(stockPurchase);
        navigate(`/stock-purchase/${stockPurchase.id}`, { state: { stockPurchase } });
        setStockPurchase(stockPurchase);
    }


    return (
        <div className="card-stock" onClick={() => handleClick(props)}>
            <span className="stock-symbol">
                {props.symbol}
            </span>
            <span className="stock-name">
                {props.stockName}
            </span>
            <span className='stock-quantity'>
                {props.qtd} ações
            </span>
            <span className="stock-value">
                R$  {props.stockValue}
            </span>
        </div>
    );
}

export default CardStock;
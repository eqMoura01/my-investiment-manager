import './CardStock.css';

const CardStock = (props) => {
    return (
        <div className="card-stock">
            <span className="stock-symbol">
                {props.symbol}
            </span>
            <span className="stock-name">
                {props.stockName}
            </span>
            <span className="stock-value">
                R$  {props.stockValue}
            </span>
        </div>
    );
}

export default CardStock;
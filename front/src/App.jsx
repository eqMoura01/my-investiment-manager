import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Stocks from './components/stocks/Stocks.jsx';
import StockPurchases from './components/stocksPurchases/StockPurchases.jsx';

function App() {

  return (
    <>
      <div>
        <Stocks />
        <StockPurchases />
        <a href="/StockForm">Cadastrar ação</a>
      </div>
    </>
  )
}

export default App

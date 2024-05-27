import CardStock from "../../components/card-stock/CardStock";
import Header from "../../components/header/Header";
import './Home.css';

const Home = () => {
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
            <span className="wallet-value">
              R$ 743,21
            </span>
          </div>

          {/* Container */}
          <div className="container-stocks">
            <span className="label-stocks">
              Ações compradas
            </span>

            <div className="cards-row">
              {/* TODO: Criar componente para o card de ação */}
              <CardStock symbol='PETR4' stockName='Petrobras' stockValue='30,78'/>
              <CardStock symbol='VALE3' stockName='Vale' stockValue='45,23'/>
              <CardStock symbol='MGLU3' stockName='Magazine Luiza' stockValue='22,56'/>
              <CardStock symbol='ITUB4' stockName='Itaú' stockValue='27,45'/>
              <CardStock symbol='BBDC4' stockName='Bradesco' stockValue='32,56'/>
              <CardStock symbol='ABEV3' stockName='Ambev' stockValue='18,45'/>
              <CardStock symbol='WEGE3' stockName='WEG' stockValue='35,78'/>
              <CardStock symbol='LREN3' stockName='Lojas Renner' stockValue='22,45'/>
              <CardStock symbol='GNDI3' stockName='NotreDame' stockValue='48,56'/>
              <CardStock symbol='NTCO3' stockName='Natura' stockValue='55,78'/>
              <CardStock symbol='RENT3' stockName='Localiza' stockValue='32,45'/>
              <CardStock symbol='IRBR3' stockName='IRB' stockValue='12,56'/>
              <CardStock symbol='CSNA3' stockName='CSN' stockValue='45,78'/>
              <CardStock symbol='BRML3' stockName='BR Malls' stockValue='8,45'/>
              <CardStock symbol='CVCB3' stockName='CVC' stockValue='18,56'/>
              <CardStock symbol='GOLL4' stockName='Gol' stockValue='22,78'/>
              <CardStock symbol='VVAR3' stockName='Via Varejo' stockValue='12,45'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
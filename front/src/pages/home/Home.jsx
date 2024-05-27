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
              <CardStock symbol='PETR4' stockName='Petrobras' stockValue='28,45' qtd='10'/>
              <CardStock symbol='VALE3' stockName='Vale' stockValue='45,32' qtd='20'/>
              <CardStock symbol='VVAR3' stockName='Via Varejo' stockValue='12,45' qtd='32'/>
              <CardStock symbol='MGLU3' stockName='Magazine Luiza' stockValue='23,12' qtd='5'/>
              <CardStock symbol='ITUB4' stockName='Itaú' stockValue='32,45' qtd='15'/>
              <CardStock symbol='BBDC4' stockName='Bradesco' stockValue='22,32' qtd='25'/>
              <CardStock symbol='BBAS3' stockName='Banco do Brasil' stockValue='45,32' qtd='10'/>
              <CardStock symbol='B3SA3' stockName='B3' stockValue='23,45' qtd='30'/>
              <CardStock symbol='PETR4' stockName='Petrobras' stockValue='28,45' qtd='10'/>
              <CardStock symbol='VALE3' stockName='Vale' stockValue='45,32' qtd='20'/>
              <CardStock symbol='VVAR3' stockName='Via Varejo' stockValue='12,45' qtd='32'/>
              <CardStock symbol='MGLU3' stockName='Magazine Luiza' stockValue='23,12' qtd='5'/>
              <CardStock symbol='ITUB4' stockName='Itaú' stockValue='32,45' qtd='15'/>
              <CardStock symbol='BBDC4' stockName='Bradesco' stockValue='22,32' qtd='25'/>
              <CardStock symbol='BBAS3' stockName='Banco do Brasil' stockValue='45,32' qtd='10'/>
              <CardStock symbol='B3SA3' stockName='B3' stockValue='23,45' qtd='30'/>
              <CardStock symbol='PETR4' stockName='Petrobras' stockValue='28,45' qtd='10'/>
              <CardStock symbol='VALE3' stockName='Vale' stockValue='45,32' qtd='20'/>
              <CardStock symbol='VVAR3' stockName='Via Varejo' stockValue='12,45' qtd='32'/>
              <CardStock symbol='MGLU3' stockName='Magazine Luiza' stockValue='23,12' qtd='5'/>
              <CardStock symbol='ITUB4' stockName='Itaú' stockValue='32,45' qtd='15'/>
              <CardStock symbol='BBDC4' stockName='Bradesco' stockValue='22,32' qtd='25'/>
              <CardStock symbol='BBAS3' stockName='Banco do Brasil' stockValue='45,32' qtd='10'/>
              <CardStock symbol='B3SA3' stockName='B3' stockValue='23,45' qtd='30'/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
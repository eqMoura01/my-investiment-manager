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
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              {/* TODO: Apagar todos os card-stock daqui pra baixo ao implementar consumo da api para trazer as ações */}
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
              <div className="card-stock">
                <span className="stock-symbol">
                  PETR4
                </span>
                <span className="stock-name">
                  Petrobras
                </span>
                <span className="stock-value">
                  R$ 30,00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
import './App.css';
import LoginForm from './components/loginScreen/LoginForm';

function App() {
  return (
    <div>
      <div className="left-column">
        <img src="logo.png" alt="Logo" />
        <h1>Gerencie seus investimentos com <br /> facilidade e segurança!</h1>
        <h2>Plataforma gratuita e muito mais para dar <br /> um up nos seus trades!</h2>
      </div>
      <div className="box">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
import LoginForm from '../../components/login-form/LoginForm';
import bgImage from '../../assets/bg.png'; // Importe a imagem para o componente

import './Login.css';

const Login = () => {
  return (
    <>
      <div className='back'>
        <img src={bgImage} alt="Background" className="background-img" />
        <div className="left-column">
          <h1>Gerencie seus investimentos com <br /> facilidade e segurança!</h1>
          <h2>Plataforma gratuita e muito mais para dar <br /> um up nos seus trades!</h2>
        </div>
        <div className="box">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;

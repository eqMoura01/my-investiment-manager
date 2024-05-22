import LoginForm from '../../components/login-form/LoginForm';

import './Login.css'

const Login = () => {

  return (
    <>
      <div>
        <Stocks />
        <StockPurchases />
        <a href="/StockForm">Cadastrar ação</a>
      </div>
      <div className="box">
        <LoginForm />
      </div>
    </>

  )

}

export default Login
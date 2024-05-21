import { useState } from 'react';
import InputField from '../inputField/InputField';
import LoginButton from '../loginButton/LoginButton';
import './LoginForm.css';

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);

  const flip = () => {
    setIsLoginForm(!isLoginForm);
  }

  const togglePasswordLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  }

  const togglePasswordSignup = () => {
    setShowPasswordSignup(!showPasswordSignup);
  }

  return (
    <div className={isLoginForm ? 'box' : 'box flipped'}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="flip-card-inner">
        {isLoginForm ? (
          <div className="box-login">
            <ul>
              <form action="" method="get">
                <h1 className="typewriter">LOGIN</h1>
                <div className="email-login">
                  <InputField className="inpt" type="email" name="email" id="" placeholder="Email " color="white" required />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-login">
                  <InputField className="inpt" type={showPasswordLogin ? "text" : "password"} name="password" id="password-login" placeholder="Password" color="white" required />
                  <i id="eye-login" className={`fa ${showPasswordLogin ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordLogin}></i>
                </div>
                <div className="forget">
                  <input type="checkbox" name="checkbox1" id="checkbox" />
                  <label htmlFor="checkbox">Remember me</label>
                  <a href="#">Forget Password?</a>
                </div>
                <LoginButton text="LOGIN" buttonColor="white" textColor="black" />
              </form>
              <div className="register-link">
                    <p>Dont have an account? <a href="#" onClick={flip}>Sign Up</a></p>
                </div>
            </ul>
          </div>
        ) : (
          <div className="box-signup">
            <ul>
              <form action="" method="get">
                <h1 className="typewriter">SIGN UP</h1>
                <div className="user-signup">
                  <InputField className="inpt" type="text" name="" id="username" placeholder="User Name" color="white" required />
                  <i className="fa fa-user"></i>
                </div>
                <div className="email-signup">
                  <InputField className="inpt" type="email" name="email" id="email-login" placeholder="Email " color="white" required />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-signup">
                  <InputField className="inpt" type={showPasswordSignup ? "text" : "password"} name="password" id="password-signup" placeholder="Password" color="white" required />
                  <i id="eye-signup" className={`fa ${showPasswordSignup ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordSignup}></i>
                </div>
                <div className="forget">
                  <input type="checkbox" name="checkbox1" id="checkbox1" />
                  <label htmlFor="checkbox1">Remember me</label>
                  <a href="#">Forget Password?</a>
                </div>
                <LoginButton text="SIGN UP" buttonColor="white" textColor="black" />
              </form>
              <div className="register-link">
                  <p>Already have an account? <a href="#" onClick={flip}>Log In</a></p>
                </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;

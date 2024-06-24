import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginInput from '../login-input/LoginInput';
import LoginButton from '../login-button/LoginButton';
import './LoginForm.css';

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const navigate = useNavigate();

  const flip = () => {
    setIsLoginForm(!isLoginForm);
  };

  const togglePasswordLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };

  const togglePasswordSignup = () => {
    setShowPasswordSignup(!showPasswordSignup);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const url = isLoginForm ? 'http://localhost:8080/user/login' : 'http://localhost:8080/user/signup';

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Login/Signup successful:', response.data);

      // Redirect to home page or desired page
      navigate('/home');
    } catch (error) {
      console.error('Login/Signup error:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className={isLoginForm ? 'box' : 'box flipped'}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="flip-card-inner">
        {isLoginForm ? (
          <div className="box-login">
            <ul>
              <form onSubmit={handleSubmit}>
                <h1 className="typewriter">LOGIN</h1>
                <div className="email-login">
                  <LoginInput className="inpt" type="email" name="email" id="email-login" placeholder="Email" color="white" required />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-login">
                  <LoginInput className="inpt" type={showPasswordLogin ? "text" : "password"} name="password" id="password-login" placeholder="Password" color="white" required />
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
                <p>Don't have an account? <a href="#" onClick={flip}>Sign Up</a></p>
              </div>
            </ul>
          </div>
        ) : (
          <div className="box-signup">
            <ul>
              <form onSubmit={handleSubmit}>
                <h1 className="typewriter">SIGN UP</h1>
                <div className="user-signup">
                  <LoginInput className="inpt" type="text" name="name" id="username" placeholder="User Name" color="white" required />
                  <i className="fa fa-user"></i>
                </div>
                <div className="email-signup">
                  <LoginInput className="inpt" type="email" name="email" id="email-signup" placeholder="Email" color="white" required />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-signup">
                  <LoginInput className="inpt" type={showPasswordSignup ? "text" : "password"} name="password" id="password-signup" placeholder="Password" color="white" required />
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
};

export default LoginForm;

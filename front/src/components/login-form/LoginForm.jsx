import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginInput from '../login-input/LoginInput';
import LoginButton from '../login-button/LoginButton';
import './LoginForm.css';

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const navigate = useNavigate();

  const flip = () => {
    setIsLoginForm(!isLoginForm);
    setLoginData({ email: '', password: '' }); // Clear login data
    setSignupData({ name: '', email: '', password: '' }); // Clear signup data
    setLoginError(''); // Clear login error
    setSignupError(''); // Clear signup error
  };

  const togglePasswordLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };

  const togglePasswordSignup = () => {
    setShowPasswordSignup(!showPasswordSignup);
  };

  const handleInputChange = (event, formType) => {
    const { name, value } = event.target;
    if (formType === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8080/user/login';

    try {
      const response = await axios.post(url, loginData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Login successful:', response.data);

      const userId = response.data.userId;
      localStorage.setItem('userId', userId);

      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setLoginError('Usuário ou senha incorretos'); // Set login error message
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8080/user/signup';

    try {
      const response = await axios.post(url, signupData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Signup successful:', response.data);
      setIsLoginForm(true);
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
      setSignupError('Erro ao registrar. Por favor, tente novamente.'); // Set signup error message
    }
  };

  return (
    <div className={isLoginForm ? 'box' : 'box flipped'}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="flip-card-inner">
        {isLoginForm ? (
          <div className="box-login">
            <ul>
              <form onSubmit={handleLoginSubmit}>
                <h1 className="typewriter">LOGIN</h1>
                {loginError && <p className="error-message" color='red'>{loginError}</p>}
                <div className="email-login">
                  <LoginInput 
                    className="inpt" 
                    type="email" 
                    name="email" 
                    id="email-login" 
                    placeholder="Email" 
                    color="white" 
                    value={loginData.email}
                    onChange={(e) => handleInputChange(e, 'login')}
                    required 
                  />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-login">
                  <LoginInput 
                    className="inpt" 
                    type={showPasswordLogin ? "text" : "password"} 
                    name="password" 
                    id="password-login" 
                    placeholder="Password" 
                    color="white" 
                    value={loginData.password}
                    onChange={(e) => handleInputChange(e, 'login')}
                    required 
                  />
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
              <form onSubmit={handleSignupSubmit}>
                <h1 className="typewriter">SIGN UP</h1>
                {signupError && <p className="error-message">{signupError}</p>}
                <div className="user-signup">
                  <LoginInput 
                    className="inpt" 
                    type="text" 
                    name="name" 
                    id="username" 
                    placeholder="User Name" 
                    color="white" 
                    value={signupData.name}
                    onChange={(e) => handleInputChange(e, 'signup')}
                    required 
                  />
                  <i className="fa fa-user"></i>
                </div>
                <div className="email-signup">
                  <LoginInput 
                    className="inpt" 
                    type="email" 
                    name="email" 
                    id="email-signup" 
                    placeholder="Email" 
                    color="white" 
                    value={signupData.email}
                    onChange={(e) => handleInputChange(e, 'signup')}
                    required 
                  />
                  <i className='fa fa-envelope'></i>
                </div>
                <div className="password-signup">
                  <LoginInput 
                    className="inpt" 
                    type={showPasswordSignup ? "text" : "password"} 
                    name="password" 
                    id="password-signup" 
                    placeholder="Password" 
                    color="white" 
                    value={signupData.password}
                    onChange={(e) => handleInputChange(e, 'signup')}
                    required 
                  />
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

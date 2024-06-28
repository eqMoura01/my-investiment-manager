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

  const navigate = useNavigate();

  const flip = () => {
    setIsLoginForm(!isLoginForm);
    setLoginData({ email: '', password: '' }); // Clear login data
    setSignupData({ name: '', email: '', password: '' }); // Clear signup data
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

  const validatePassword = (password) => {
    // Pelo menos 5 caracteres, 1 letra maiúscula, 1 caracter especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9a-zA-Z]).{5,}$/;
    return passwordRegex.test(password);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8080/user/signup';

    if (!validatePassword(signupData.password)) {
      alert('A senha deve ter pelo menos 5 caracteres, 1 letra maiúscula e 1 caractere especial.');
      return;
    }

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
      alert('Erro ao registrar. Por favor, tente novamente.');
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
      alert('Usuário ou senha incorretos');
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

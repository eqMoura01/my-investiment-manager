import PropTypes from 'prop-types';
import './LoginButton.css';

const LoginButton = ({ text, buttonColor, textColor }) => (
  <button type="submit" className="btn" style={{ backgroundColor: buttonColor, color: textColor }}>
    {text}
  </button>
);

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired, // Cor do botão
  textColor: PropTypes.string.isRequired,   // Cor do texto
};

export default LoginButton;

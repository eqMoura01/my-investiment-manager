import PropTypes from 'prop-types';
import './LoginInput.css'; // Certifique-se de criar e configurar o arquivo de estilo para estilizar o componente

const InputField = ({ type, color, placeholder, name, value, onChange, required }) => {
    return (
        <div className="input-field" style={{ borderColor: color }}>
            <input 
                className="inpt" 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                required={required} 
                style={{ borderColor: color }}
            />
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};

InputField.defaultProps = {
    color: '#000', // Cor padrão
    placeholder: '',
    required: false
};

export default InputField;

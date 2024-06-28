import './UserConfig.css';
import InputField from "../login-input/LoginInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../login-button/LoginButton";
import axios from 'axios';

const UserPage = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        newPassword: ''
    });

    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await axios.post('http://localhost:8080/user/getuserinfo', userId, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status === 200) {
                        const userData = response.data;
                        console.log('Dados do usuário recebidos:', userData);
                        setFormData({
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            password: '', 
                            newPassword: ''
                        });
                    } else {
                        console.error('Erro ao buscar dados do usuário:', response.statusText);
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

    const togglePasswordOld = () => {
        setShowPasswordOld(!showPasswordOld);
    };

    const togglePasswordNew = () => {
        setShowPasswordNew(!showPasswordNew);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validatePassword = (password) => {
        // Requisitos mínimos da senha
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9a-zA-Z]).{5,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const payload = {
                id: localStorage.getItem('userId'),
                name: formData.name,
                email: formData.email,
            };
    
            if (formData.password && formData.newPassword) {
                payload.password = formData.password;
                payload.newPassword = formData.newPassword;
            } else if (formData.password || formData.newPassword) {
                alert('Por favor, preencha tanto a senha antiga quanto a nova.');
                return;
            }
    
            if (formData.newPassword && !validatePassword(formData.newPassword)) {
                alert('A nova senha deve ter pelo menos 5 caracteres, uma letra maiúscula e um caractere especial.');
                return;
            }
    
            console.log('Payload enviado:', payload);
    
            const response = await axios.post('http://localhost:8080/user/update', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                navigate('/home');
            } else {
                console.error('Erro ao atualizar dados do usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
            alert('Senha incorreta. Por favor, tente novamente.');
        }
    };

    return (
        <div className="formUser">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <ul>
                <form onSubmit={handleSubmit}>
                    <h1>User</h1>
                    <div className="user-signup">
                        <InputField
                            type="text"
                            name="name"
                            placeholder="User Name"
                            color="white"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="icon-container">
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
                    <div className="email-login">
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Email"
                            color="white"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="icon-container">
                            <i className='fa fa-envelope'></i>
                        </div>
                    </div>
                    <div className="password-signup">
                        <InputField
                            type={showPasswordOld ? "text" : "password"}
                            name="password"
                            placeholder="Senha antiga"
                            color="white"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <div className="icon-container">
                            <i id="eye-oldpass" className={`fa ${showPasswordOld ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordOld}></i>
                        </div>
                    </div>
                    <div className="password-signup">
                        <InputField
                            type={showPasswordNew ? "text" : "password"}
                            name="newPassword"
                            placeholder="Nova senha"
                            color="white"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                        />
                        <div className="icon-container">
                            <i id="eye-newpass" className={`fa ${showPasswordNew ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordNew}></i>
                        </div>
                    </div>
                    <div className="button-group">
                        <LoginButton text="Salvar" buttonColor="white" textColor="black" type="submit" />
                        <LoginButton text="Cancelar" buttonColor="white" textColor="black" onClick={() => navigate('/home')} />
                    </div>
                </form>
            </ul>
        </div>
    );
};

export default UserPage;

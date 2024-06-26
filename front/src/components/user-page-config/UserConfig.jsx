import "./UserConfig.css";
import InputField from "../login-input/LoginInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../login-button/LoginButton";
import axios from 'axios';

const UserPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        newPassword: ''
    });

    const [showPasswordSignup, setShowPasswordSignup] = useState(false);
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
                            name: userData.name,
                            email: userData.email,
                            password: '', // Certifique-se de não preencher o campo de senha aqui por razões de segurança
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

    const togglePasswordSignup = () => {
        setShowPasswordSignup(!showPasswordSignup);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/update', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                navigate('/dashboard'); // Navega para a página de dashboard após salvar
            } else {
                console.error('Erro ao atualizar dados do usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
        }
    };

    return (
        <div className="formUser">
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
                        <i className="fa fa-user"></i>
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
                        <i className='fa fa-envelope'></i>
                    </div>
                    <div className="password-signup">
                        <InputField
                            type={showPasswordSignup ? "text" : "password"}
                            name="password"
                            placeholder="Old password"
                            color="white"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <i id="eye-signup" className={`fa ${showPasswordSignup ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordSignup}></i>
                    </div>
                    <div className="password-signup">
                        <InputField
                            type={showPasswordSignup ? "text" : "password"}
                            name="newPassword"
                            placeholder="New password"
                            color="white"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <i id="eye-signup" className={`fa ${showPasswordSignup ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordSignup}></i>
                    </div>
                    <LoginButton text="SAVE" buttonColor="white" textColor="black" type="submit" />
                </form>
            </ul>
        </div>
    );
};

export default UserPage;

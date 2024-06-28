import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <a href="/home">
                <img src={logo} alt="Logo" className='logo' />
            </a>
            <div className='selector'>
                <a href='/stock-purchase' className='header-text'>Compras</a>
                <a href='/user-page' className='header-icon'>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </a>
                <a href="/" className='header-text'>Sair</a>
            </div>
        </header>
    );
}

export default Header;

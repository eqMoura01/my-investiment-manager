import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <a href="/home">
                <img src={logo} alt="Logo" className='logo' />
            </a>
            <div className='selector'>
                <a href='/stock-purchase' className='header-text' >Compras</a>
            </div>
        </header>
    );
}

export default Header;
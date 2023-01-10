import React from 'react';
import { Link } from "react-router-dom";

// import du logo du site et du style du Header
import logo_header from '../asset/Header/logo_header.jpg';
import '../styles/Header.scss';

const Header = () => {
    return(
        <div>
            <nav className='header'>
                <Link to='/'>
                <img src={logo_header} alt="Logo KASA" />
                </Link>
                <ul className='header-menu'>

                    <li><Link to='/' className='Acceuil'>Acceuil</Link></li>
                    <li><Link to='/A_Propos' className='AboutLink'>A Propos</Link></li>

                </ul>
            </nav>
        </div>
    )
};

export default Header;

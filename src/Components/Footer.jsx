import React from 'react';
import logo_footer from '../asset/Footer/logo_footer.png'
import '../styles/Footer.scss';

const Footer = () => {

    const effectiveYear = new Date().getFullYear();
    
    return(
        <div className='footer'>
            <img src={logo_footer} alt="Logo KASA" />
            <p>© {effectiveYear} Kasa. All rights reserved</p>
        </div>
    )
};

export default Footer;

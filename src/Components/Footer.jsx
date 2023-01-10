import React from 'react';

// import du logo du site et du style du Footer
import logo_footer from '../asset/Footer/logo_footer.png'
import '../styles/Footer.scss';

const Footer = () => {

    // Récuperation de l'année en cours
    const effectiveYear = new Date().getFullYear();
    
    return(
        <div className='footer'>
            <img src={logo_footer} alt="Logo KASA" />
            <p>© {effectiveYear} Kasa. All rights reserved</p>
        </div>
    )
};

export default Footer;

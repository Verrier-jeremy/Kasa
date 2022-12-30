import React from 'react';
import { Link } from "react-router-dom";


function error404() {
    return(
        <div className='error'>
           
            <article className='error-content'>
                <p className="error-number">404</p>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            </article>
            
            <Link to='/' className="error__link">Retourner sur la page d'accueil</Link>
           
        </div>

    );
}

export default error404;
import React from 'react';

// Import de la base de donnée aboutKasa et du composant Thumb
import aboutData from'../Data/aboutKasa';
import Thumb from '../Components/Thumb';

function Home() {
    return(
        <div className='Home'>
            <div className='Home_banner'>
                <p className='Text_banner'>{aboutData.slogan}</p>
            </div>
            <Thumb />
        </div>
    );
}

export default Home;
import React from 'react';
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
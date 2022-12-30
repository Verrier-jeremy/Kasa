import React from 'react';
import {Link} from 'react-router-dom'
import aboutData from'../Data/aboutKasa';
import Apartments from '../Data/Apartment.json';

function Home() {
    return(
        <div className='Home'>
            <div className='Home_banner'>
                <p className='Text_banner'>{aboutData.slogan}</p>
            </div>
        
            <section className='ApartmentList'>
                {Apartments.map((apartment) => {
                    return(                       
                        <article className='apartment'> 
                        <Link to={`/Apartement/${apartment.id}`}> 
                            <img className='homeImg' src={apartment.cover} alt={apartment.title}/>
                            <h2 className='apartmentTitle'>{apartment.title}</h2>
                        </Link >
                        </article>      
                    )
                })}
            </section>    
        </div>
    );
}

export default Home;
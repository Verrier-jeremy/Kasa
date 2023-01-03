import React from "react";
import Apartments from '../Data/Apartment.json';
import {Link} from 'react-router-dom';

const Thumb = () => {
    return(
        <section className='ApartmentList'>
            {Apartments.map((apartment) => {
                return(                       
                    <article key={apartment.id} className='apartment'> 
                    <Link to={`/Apartement/${apartment.id}`}> 
                        <img className='homeImg' src={apartment.cover} alt={apartment.title}/>
                        <h2 className='apartmentTitle'>{apartment.title}</h2>
                    </Link >
                    </article>      
                )
            })}
        </section>    
    
    )
}

export default Thumb;
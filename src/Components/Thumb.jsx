import React from "react";
import {Link} from 'react-router-dom';

// import de la base de donnée concernant les apartement
import Apartments from '../Data/Apartment.json';


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
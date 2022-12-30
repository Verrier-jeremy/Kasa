import React from 'react';
import { useParams } from 'react-router-dom';



// import des components Collaps, Tags, Rate et Carousel
import Carousel from '../Components/Carousel';
import Tags from '../Components/Tags';
import Rate from '../Components/Rate';
import Collaps from '../Components/Collaps';

//import de la base de donnée Apartments
import Apartments from '../Data/Apartment.json'




const Apartment = () => {
    //Recuperation de l'id de l'apartement dans l'URL & des information concernant celui-ci
    const {id} = useParams();
    const Apartment = Apartments.find(apartment => apartment.id === id);
    const {title, pictures, host, location, rating, equipments, description, tags } = Apartment;
    
return (
    
    <div className='Apartment__main'>
        <div className='Apartment__cover'>
            <Carousel pictures={pictures}/>
        </div>
        <div className='Apartment__title__profile'>
            <h1 className='Apartment__title'>{title}</h1>
            <div className='Apartment__user__profile'>
                <span className='Apartment__user'>{host.name}</span>
                <img className='Apartment__profile' src={host.picture} alt={host.name}/>
            </div>
        </div>
        <p className='Apartment__location'>{location}</p>
        <div className='Apartment__tags'>
            {tags.map((tag, index) => 
            <Tags key={index} getTags={tag}/>)}  
        </div>
        <div className='Apartment__rating'>
                <Rate number={rating} />
            </div>
        <div className='Apartment__collaps'>
            <Collaps title="Description" content={description} />
            <Collaps title="Équipements" content={equipments} />
        </div>
    </div>

)}

export default Apartment;
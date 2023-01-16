import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import des components Collaps, Tags, Rate et Carousel
import Carousel from '../Components/Carousel';
import Tags from '../Components/Tags';
import Rate from '../Components/Rate';
import Collaps from '../Components/Collaps';

//import de la base de donnée Apartments
import apartments from '../Data/Apartment.json'


const Apartment = () => {
    //Recuperation de l'id de l'apartement dans l'URL & des information concernant celui-ci
    const {id} = useParams();
    
    const navigate = useNavigate()
    const [apartment, setApartment] = useState({});
   
    useEffect(() => {
    
    const apartment_ = apartments.find(item => item.id === id);
    if (apartment_ === undefined) {
        navigate("/error404")
    } else{
        setApartment(apartment_)
    }
    },[id, navigate]);
        
    return (
        
        <div className='Apartment__main'>
            <div className='Apartment__cover'>
                {apartment.pictures && (
                <Carousel pictures={apartment.pictures}/>
                )}
            </div>
            <div className='Apartment__container'>
                <div className='Apartment__title__profile'>
                    <h1 className='Apartment__title'>{apartment.title}</h1> 
                    <p className='Apartment__location'>{apartment.location}</p> 
                    {apartment.tags && apartment.tags.map((tag, index) => 
                    <Tags key={index} getTags={tag}/>)}  
                </div>
            
                <div className='Apartment__rating'>
                    {apartment.host && (
                    <div className='user__profile'>
                         <span className='user'>{ apartment.host.name}</span>
                        <img className='profile' src={apartment.host.picture} alt={apartment.host.name}/>       
                    </div>
                    )}
                    <Rate number={apartment.rating} />
                </div>
            </div>
            <div className='Apartment__collaps'>
                <Collaps title="Description" content={apartment.description} />
                <Collaps title="Équipements" content={apartment.equipments} />
            </div>
        </div>
    
    )}

export default Apartment;
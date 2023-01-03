import React from "react";
import { useState } from "react";

import '../styles/Carousel.scss';
import BigVector from'../asset/Banner/BigVector.png'


const Carousel = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //const [previousIndex, setPreviousIndex] = useState(0);
    const length = pictures.length - 1;

    const Previous = () => {
        let newIndex = currentIndex === 0 ? length : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    const Next = () => {
        let newIndex = currentIndex === length ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };
    
    
    return( 

        <div className="Carousel" >
            <div className="previous__arrow" onClick={Previous}>
                <img className="vector LeftVector" src={BigVector} alt="Précédente" />
            </div>

            <img className="Apartment__picture" src={pictures[currentIndex]} alt="vu de l'apartement"/>

            <div className="next__arrow" onClick={Next} >
                <img className="vector RightVector" src={BigVector} alt="Suivante" />
            </div>
        </div>
        )
    }

export default Carousel;
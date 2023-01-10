import React from "react";

// import de l'image Vector et du style Collaps
import '../styles/Collaps.scss';
import Vector from'../asset/Banner/Vector.png';

const Collaps = ({title, content}) => {
    const isCollaps = (e) => {
        e.preventDefault();
        const divText = e.target.nextSibling;
        const arrow = e.target.lastChild;

        if (!divText.classList.contains("show")){
            divText.classList.add("show");
            arrow.classList.add("rotate");
        }else {           
            divText.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    };
          
    return (
        <div className="collaps">
                <button type="button" className="button_collaps" onClick={isCollaps}>
                    {title}
                    <img className="vector_collaps" src={Vector} alt='Chevron'/>
                </button>
                <div className="text_collaps">
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                    {content.map((equipment, index) => (
                        <li key={index} className="collapse__list_element">
                            {equipment}
                        </li>
                    ))}
                    </ul>
                ) : (
                <p className="collapse__text">{content}</p>
                )}
                </div>
        </div>
    )
    
}

export default Collaps

import React from "react";

//import du style des Rating
import '../styles/Rating.scss'

const Rate = ({number}) => {
    const stars = [1,2,3,4,5];

    return (
        
        <div className="Rate">
        {stars.map((star) =>
          number >= star ? (
           <p key={star} className="colored-star">★</p>
          ) : (
            <p key={star} className="empty-star">★</p>
          ))}
      </div>
    )
}
export default Rate;
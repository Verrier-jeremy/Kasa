import React from 'react';
import '../styles/Tags.scss'

const Tags = ({getTags}) => {
    return(
    <div className='TagElement'>
        <p className='tag'>{getTags}</p>
    </div>
    );
}

export default Tags;

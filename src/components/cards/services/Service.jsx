import React from 'react';
import './Sevice.css'

function Service({img, title}) {
    return (
        <div className='services'>
            <div className="img-block"><img src={img} alt=""/></div>
            <span className='title'>{title}</span>
        </div>
    );
}

export default Service;
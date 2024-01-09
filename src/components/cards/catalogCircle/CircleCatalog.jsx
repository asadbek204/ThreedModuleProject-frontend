import React from 'react';
import './CircleCatalog.css'

function CircleCatalog({image, title}) {
    return (
        <div className='circle-catalog'>
            <div className="image-block">
                <img className='image-block' src={image} alt=""/>
            </div>
            <span className="title">{title}</span>
        </div>
    );
}

export default CircleCatalog;
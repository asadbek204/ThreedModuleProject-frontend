import React from 'react';
import './Catalog.css'

function Catalog({id, backgroundImage, title}) {
    return (
        <div className='sub-catalog-viewport'>
            <div className="catalog-view" style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className="opacity-animation"></div>
            <div className="button-block">
                <span className="catalog-view-title">{title}</span>
                <button className='btn-detail' id={`detail-${id}`}>see more</button>
            </div>
        </div>

    );
}

export default Catalog;
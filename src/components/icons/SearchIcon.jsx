import React from 'react';
import './searchIcon.css'

function SearchIcon({color, className}) {
    const style = {borderColor: color}
    return (
        <div className={`search-icon ${className}`}>
            <div className='search-glass' style={style}></div>
            <div className='search-handle' style={style}></div>
        </div>
    );
}

export default SearchIcon;
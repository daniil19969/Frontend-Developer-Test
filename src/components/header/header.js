import React from 'react';
import './header.css';

const Header = ({shoot}) => {
    return (
        <div className = "header"> 
        <h1>Book List </h1> 
        
        <button className="btn btn-outline-primary " onClick={shoot}> Change Service </button>
        </div>
    )
}

export default Header;
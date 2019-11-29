import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header>
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;

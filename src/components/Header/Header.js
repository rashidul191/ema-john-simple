import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/inventor">Manage Inventory Here</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;
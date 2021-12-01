import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.css';

const Header = ({countCartItems}) => (
    <div className='header row'>
        <div className='col-2 mt-4'>
            <a href='/#' className='logo-container' to="/">
                <Logo className='logo' />
            </a>
        </div>
        <div className='col-2'>
            <h2 className='title'>Movie Shop</h2>
        </div>
        <div className='col-7'>
            <div className='options'>
                <Link className='option' to='/'> HOME </Link>
                <Link className='option' to='/'> CONTACT </Link>
            </div>
        </div>
        <div className='col-1 mt-4'><span className='btn oi oi-cart btn-warning'><strong> {countCartItems}</strong></span></div>
    </div>
);

export default Header;
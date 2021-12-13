import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/cart-context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.css';

const Header = () => {

    const ctx = useContext(CartContext);

    return (
        <div className='header row'>
            <div className='mt-4 mb-2 col-md-2 col-lg-2 col-sm-2 col-6'>
                <a href='/#' className='logo-container' to="/">
                    <Logo className='logo' />
                </a>
            </div>
            <div className='col-md-3 col-lg-3 col-sm-4 mobile-title'>
                <h2 className='title'>Movie Shop</h2>
            </div>
            <div className='col-md-5 col-lg-5 col-sm-4 mobile-link'>
                <div className='options'>
                    <Link className='option' to='/'> HOME </Link>
                </div>
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 mt-4 col-6'>
                <span className='oi oi-cart font-cart-icon'>
                    <strong> {ctx.cartItems.length}</strong>
                </span>
            </div>
        </div>
    )
};

export default Header;
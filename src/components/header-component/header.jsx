import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.css';

  //---------- Code Review-------------
/*
- Contact page does not exist. Try to keep in your code things that actually do something. 
I would love to see you implement a contact page if you want, but if you dont please remove it. (UI/UX wise)

- Also the countCartItem is not a button, you dont need to show to user that can click something that 
doesnt do anything. Either change the pointer to cursor or remove btn attribute.
*/
  //----------End Code Review-------------

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
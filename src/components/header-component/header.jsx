import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.css';

// you can create a prop with number of ordered movies 
const Header = () => (
    <div className='header row'>
        <div className='col-2 mt-4'>  
            <a className='logo-container' to="/">
            <Logo className='logo'/>
            </a>
        </div>
        <div className='col-2'>  
        <h2 className='title'>Movie Shop</h2>
        </div>
       
      <div className='col-7'>
        <div className='options'>
            <Link className='option' to='/shop'> HOME </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
        </div>
        </div>
        <div className='col-1 mt-4'><span className='btn oi oi-cart btn-danger'><strong> 2</strong></span></div>
    </div>
);

export default Header;
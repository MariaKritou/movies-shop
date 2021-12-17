import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from "../../contexts/user-context";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useNavigate } from "react-router-dom"; // v6
import functions from '../../utils/user-data';
import './header.styles.css';

const Header = () => {

    const ctxCart = useContext(CartContext);
    const ctxUser = useContext(UserContext);
    const navigate = useNavigate();

    let auth = functions.isAuthenticated();
    let name = functions.getUsername();
 
    function handleLogout(event){
        event.preventDefault();
        ctxUser.removeUser();
        navigate("/signin");  
    }

    return (
        <div className='header row'>
            <div className='mt-4 mb-2 col-md-2 col-lg-2 col-sm-2 col-3'>
                <a href='/#' className='logo-container' to="/">
                    <Logo className='logo' />
                </a>
            </div>
            <div className='col-md-3 col-lg-3 col-sm-4 mobile-title'>
                <h2 className='title'>Movie Shop</h2>
            </div>
            <div className='col-md-5 col-lg-5 col-sm-4 mobile-link col-6' align='center'>
                <div className='options'>
                    <Link className='option' to='/'> HOME </Link>
                    <Link className='option' to='/private'> PRIVE </Link>
                    {auth === "true" ? (<h3 className='option text-white' onClick={handleLogout} >{name}</h3>) : (<Link className='option text-white' to='/signin'> SIGN IN</Link>)}
                </div>
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 mt-4 col-3'>
                <span className='oi oi-cart font-cart-icon'>
                    <strong> {ctxCart.cartItems.length}</strong>
                </span>
            </div>
        </div>
    )
};

export default Header;
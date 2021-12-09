import axios from 'axios';
import React, { useState, createContext } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = props => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [btnDisable, setDisable] = useState('');

    const onAdd = (movie) => {
        const exists = cartItems.find(x => x.id === movie.id);

        //If a movie is already in the cart then just increase its quantity 
        if (exists) {
            setCartItems(cartItems.map((x) =>
                x.id === movie.id ? { ...exists, quantity: exists.quantity + 1 } : x));
        }
        //Otherwise put the movie in the cart and its quantity will be 1 
        else {
            setCartItems([...cartItems, { ...movie, quantity: 1 }])
        }
        //Increase the total price when adding a movie in cart
        setTotalPrice(totalPrice + 10);
    }

    const onRemove = (movie) => {
        const exists = cartItems.find(x => x.id === movie.id);

        //If the movie is in the cart and its only one then filter it out
        if (exists.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== movie.id));
        }
        //Otherwise decrease the movie's quantity by one
        else {
            setCartItems(cartItems.map((x) =>
                x.id === movie.id ? { ...exists, quantity: exists.quantity - 1 } : x));
        }
        //Also remove the price from total
        setTotalPrice(totalPrice - 10);
    }

    async function purchaseMovies() {

        setDisable('disabled');

        const idList = []
        cartItems.forEach(movie => {
            idList.push(movie.id);
        });
        const postData = { 'data': idList };
        const headers = {
            'X-Mocklets-PublicKey': 'txmovies',
            'X-Mocklets-Checksum': '830c7cd4a70be6540a4898441ca02951'
        };

        try {
            const response = await axios.post('https://api.mocklets.com/mock68075/', { postData }, { headers })
            const dataRes = await response.data;

            if (dataRes.success) {
                toast.success("Purchase successful");
                setCartItems([]);
                setTotalPrice(0);
            } else {
                toast.error("Purchase was not successful, try again");
            }

        } catch (error) {
            console.log(error);
        }

        setDisable('');
    }

    const cartCtx = {
        onAdd,
        onRemove,
        cartItems,
        purchaseMovies,
        totalPrice,
        btnDisable
    };

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    );
};
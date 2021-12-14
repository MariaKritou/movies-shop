import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {

 function storeUser(name, pass){
        localStorage.setItem('authenticated', true);
        localStorage.setItem('username', name);
        localStorage.setItem('password', pass);
    }

    function removeUser(){
        localStorage.setItem('authenticated', false);
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    const userCtx = {
        storeUser, removeUser,
    };

    return (
        <UserContext.Provider value={userCtx}>
            {props.children}
        </UserContext.Provider>
    );
};
import React from 'react';
import { Navigate } from "react-router";
import functions from '../../utils/user-data';

const PrivateRoute = ({ children }) => {
    const auth = functions.isAuthenticated(); 
    
    return auth === "true" ? children : <Navigate to="/signin" />;
  }

export default PrivateRoute;
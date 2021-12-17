import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage';
import { Auth } from './pages/auth/auth';
import { Private } from './pages/private/private';
import PrivateRoute from './components/routing/private';
import './App.css'

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/signin' element={<Auth />} />
      <Route path="/private" element={<PrivateRoute> <Private /> </PrivateRoute>} />
    </Routes>
  );
}

export default App;

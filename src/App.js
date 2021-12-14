import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage';
import { Auth } from './pages/auth/auth';
import './App.css'

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/signin' element={<Auth />} />
    </Routes>
  );
}

export default App;

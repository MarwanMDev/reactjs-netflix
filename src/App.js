import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';

function App() {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

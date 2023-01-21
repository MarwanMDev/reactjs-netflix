import React from 'react';
import Hero from '../hero';
import Navbar from '../navbar';
import './home.css';
const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Hero />
    </div>
  );
};

export default Home;

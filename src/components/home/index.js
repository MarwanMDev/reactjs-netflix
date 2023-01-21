import React from 'react';
import requests from '../../utils/requests';
import Category from '../category';
import Hero from '../hero';
import Navbar from '../navbar';
import './home.css';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Category
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Category
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLarge
      />{' '}
      <Category
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLarge
      />{' '}
      <Category
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLarge
      />{' '}
      <Category
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLarge
      />{' '}
      <Category
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLarge
      />
      <Category
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLarge
      />
      <Category
        title="Documentraies"
        fetchUrl={requests.fetchDocumentraies}
        isLarge
      />
    </div>
  );
};

export default Home;

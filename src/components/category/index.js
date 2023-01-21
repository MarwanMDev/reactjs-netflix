import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './category.css';

const Category = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="category">
      <h2>{title}</h2>

      <div className="category__posters">
        {movies.map(
          (movie) => (
            // (isLarge && movie.poster_path) ||
            // (!isLarge && movie.backdrop_path && (
            <img
              key={movie.id}
              className={`category__poster ${
                isLarge && 'category__posterLarge'
              }`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          )
          // ))
        )}
      </div>
    </div>
  );
};

export default Category;

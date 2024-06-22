import React from 'react';
import { useSelector } from 'react-redux';
import GenreCard from '../components/GenreCard';

const Genres = () => {
  const genres = useSelector((state) => state.music.genres);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Genres</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.isArray(genres) && genres.length > 0 ? (
          genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))
        ) : (
          <p>No genres available</p>
        )}
      </div>
    </div>
  );
};

export default Genres;

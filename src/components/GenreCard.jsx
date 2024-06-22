import React from 'react';

const GenreCard = ({ genre }) => (
  <div className="bg-gray-800 text-white p-4 rounded">
    <h3 className="text-lg font-bold">{genre.name}</h3>
  </div>
);

export default GenreCard;

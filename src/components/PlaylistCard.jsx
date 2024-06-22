import React from 'react';

const PlaylistCard = ({ playlist }) => (
  <div className="bg-gray-800 text-white p-4 rounded">
    <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-bold mt-2">{playlist.name}</h3>
    <p>{playlist.description}</p>
  </div>
);

export default PlaylistCard;

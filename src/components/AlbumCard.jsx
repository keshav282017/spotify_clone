import React from 'react';

const AlbumCard = ({ album }) => (
  <div className="bg-gray-800 text-white p-4 rounded">
    <img src={album.coverUrl} alt={album.title} className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-bold mt-2">{album.title}</h3>
    <p>{album.artist}</p>
  </div>
);

export default AlbumCard;

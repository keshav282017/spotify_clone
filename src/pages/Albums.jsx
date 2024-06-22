import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCard from '../components/AlbumCard';

const Albums = () => {
  const albums = useSelector((state) => state.music.albums);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.isArray(albums) && albums.length > 0 ? (
          albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))
        ) : (
          <p>No albums available</p>
        )}
      </div>
    </div>
  );
};

export default Albums;

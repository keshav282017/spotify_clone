import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistCard from '../components/PlaylistCard';
import PlayerControl from '../components/PlayerControl';

const Home = () => {
  const playlists = useSelector((state) => state.music.playlists);

  return (
    <div className="container mx-auto p-4 pb-24"> {/* Added padding to avoid overlap with player */}
      <h1 className="text-2xl font-bold mb-4">Playlists</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.isArray(playlists) && playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        ) : (
          <p>No playlists available</p>
        )}
      </div>
      <PlayerControl />
    </div>
  );
};

export default Home;

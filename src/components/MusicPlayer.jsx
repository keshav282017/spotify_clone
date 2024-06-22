// src/components/MusicPlayer.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ReactHowler from 'react-howler';

const MusicPlayer = () => {
  const currentTrack = useSelector((state) => state.music.currentTrack);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      {currentTrack ? (
        <div className="flex justify-between items-center">
          <div>{currentTrack.title}</div>
          <ReactHowler src={currentTrack.url} playing={true} />
          <div>Player Controls</div>
        </div>
      ) : (
        <div>No track selected</div>
      )}
    </div>
  );
};

export default MusicPlayer;

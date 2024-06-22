// src/pages/Playlist.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCurrentTrack } from '../redux/slices/musicSlice';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.music.playlists);
  const playlist = playlists.find((p) => p.id === id);

  useEffect(() => {
    if (!playlist) {
      const fetchPlaylist = async () => {
        const response = await axios.get(`/api/playlists/${id}`);
        // Update the playlist in the store
      };
      fetchPlaylist();
    }
  }, [id, playlist, dispatch]);

  return (
    <div className="container mx-auto p-4">
      {playlist ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{playlist.name}</h1>
          <div className="grid grid-cols-1 gap-4">
            {playlist.tracks.map((track) => (
              <div
                key={track.id}
                className="flex justify-between items-center p-2 rounded bg-gray-800 text-white cursor-pointer"
                onClick={() => dispatch(setCurrentTrack(track))}
              >
                <div>{track.title}</div>
                <div>{track.artist}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Playlist;

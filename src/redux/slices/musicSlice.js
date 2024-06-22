import { createSlice } from '@reduxjs/toolkit';
import { mockPlaylists, mockAlbums, mockGenres } from '../../data/mockData';

const initialState = {
  playlists: mockPlaylists,
  albums: mockAlbums,
  genres: mockGenres,
  currentTrack: null,
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setPlaylists, setAlbums, setGenres, setCurrentTrack } = musicSlice.actions;
export default musicSlice.reducer;

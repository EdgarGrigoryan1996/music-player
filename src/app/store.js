import { configureStore } from '@reduxjs/toolkit';
import songListReducer from "../features/songList/songListSlice"
import currentSongReducer from "../features/currentSong/currentSongSlice"

export const store = configureStore({
  reducer: {
    songList: songListReducer,
    currentSong: currentSongReducer
  },
});

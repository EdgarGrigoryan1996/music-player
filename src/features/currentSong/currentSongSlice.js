import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    audio:null,
    song:null,
    isPlayed:false,
    playAll:false,
    playAllSongs: null
}

export const currentSongSlice = createSlice({
    name: 'currentSong',
    initialState,

    reducers: {
        playSong: (state, action) => {
            state.audio = new Audio()
            state.audio.src = action.payload.song.src
            state.audio.currentTime = 0
            state.song = action.payload.song
            state.isPlayed = true
        },
        closeCurrentSong: (state) => {
            state.audio = null
            state.song = null
            state.isPlayed = false
            state.playAll = false
        },
        togglePlaying: (state) => {
            state.isPlayed = !state.isPlayed
        },
        playAll: (state,action) => {
            state.playAll = !state.playAll
            state.playAllSongs = action.payload.songs
        },
        playAllWithSong: (state,action) => {
            state.playAll = !state.playAll
            state.isPlayed = true
            state.audio = new Audio()
            state.audio.src = action.payload.song.src
            state.audio.currentTime = 0
            state.song = action.payload.song
            state.playAllSongs = action.payload.songs
        }
    },
});

export const { playSong,closeCurrentSong,togglePlaying,playAll,playAllWithSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;

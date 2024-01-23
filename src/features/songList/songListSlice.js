import {createSlice } from '@reduxjs/toolkit';
import data from "../../musicData/data";

const initialState = {
    data:data,
    favorites: {
        status:false,
        favSongsAll:[],
        favSongs:[]
    }
}

export const songListSlice = createSlice({
    name: 'songList',
    initialState,
    reducers: {
        filterByName: (state,action) => {
            if(!state.favorites.status){
                state.data = data.filter((song) => {
                    return song.title.toLowerCase().includes(action.payload.toLowerCase()) || song.artists.toLowerCase().includes(action.payload.toLowerCase())
                })
            } else {

                state.favorites.favSongs = state.favorites.favSongsAll.filter((song) => {
                    return song.title.toLowerCase().includes(action.payload.toLowerCase()) || song.artists.toLowerCase().includes(action.payload.toLowerCase())
                })
            }

        },
        sort:(state,action) => {
            if(!state.favorites.status){
                switch (action.payload) {
                    case 'name':
                        state.data = data.slice().sort((a,b) => {
                            return a.title.localeCompare(b.title)
                        })
                        break;
                    case 'artist':
                        state.data = data.slice().sort((a,b) => {
                            return a.artists.localeCompare(b.srtists)
                        })
                        break;
                    case 'id':
                        state.data = data.slice().sort((a,b) => {
                            return a.id - b.id
                        })
                        break;
                    case 'reverse':
                        state.data = data.slice().sort((a,b) => {
                            return b.id - a.id
                        })
                        break;
                    default:
                        break;
                }
            } else {
                switch (action.payload) {
                    case 'name':
                        state.favorites.favSongs = state.favorites.favSongs.slice().sort((a,b) => {
                            return a.title.localeCompare(b.title)
                        })
                        break;
                    case 'artist':
                        state.favorites.favSongs = state.favorites.favSongs.slice().sort((a,b) => {
                            return a.artists.localeCompare(b.srtists)
                        })
                        break;
                    case 'id':
                        state.favorites.favSongs = state.favorites.favSongs.slice().sort((a,b) => {
                            return a.id - b.id
                        })
                        break;
                    case 'reverse':
                        state.favorites.favSongs = state.favorites.favSongs.slice().sort((a,b) => {
                            return b.id - a.id
                        })
                        break;
                    default:
                        break;
                }
            }
            
        },
        showFavorites: (state) => {
            state.favorites.status = true
        },
        showAllSongs: (state) => {
            state.favorites.status = false
        },
        addSongToFavorite: (state,action) => {
            state.favorites.favSongs.push(action.payload)
            state.favorites.favSongsAll.push(action.payload)
            
        },
        removeSongFromFavorite: (state, action) => {
            state.favorites.favSongs = state.favorites.favSongs.filter((song) => {
                return song.id !== action.payload.id
            })
            state.favorites.favSongsAll = state.favorites.favSongsAll.filter((song) => {
                return song.id !== action.payload.id
            })
        }
    }
});

export const { filterByName,sort,showFavorites,showAllSongs,addSongToFavorite,removeSongFromFavorite} = songListSlice.actions;

export default songListSlice.reducer;

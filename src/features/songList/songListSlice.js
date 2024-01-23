import {createSlice } from '@reduxjs/toolkit';
import data from "../../musicData/data";


const initialState = {
    data:data
}

export const songListSlice = createSlice({
    name: 'songList',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        filterByName: (state,action) => {
            state.data = data.filter((song) => {
                return song.title.toLowerCase().includes(action.payload.toLowerCase()) || song.artists.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        sort:(state,action) => {
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
        }
    }
});

export const { filterByName,sort } = songListSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default songListSlice.reducer;

import React from 'react';
import s from "./MusicPlayer.module.css"
import TopNavigation from "./TopNavigation/TopNavigation";
import SongList from "./SongList/SongList";
import {useSelector} from "react-redux";
import CurrentPlayer from "../CurrentPlayer/CurrentPlayer";
import ChooseSongList from './ChooseSongsList/ChooseSongList';
import MusicUploadForm from './MusicUploadForm/MusicUploadForm';

function MusicPlayer() {
    const songs = useSelector((state) => {
        return state.songList
    })
    const currentSong = useSelector((state) => {
        return state.currentSong
    })

    return (
        <div className={s.player}>
            <h1>Music Player</h1>

            <TopNavigation currentSong={currentSong} songs={songs.favorites.status ? songs.favorites.favSongs : songs.data}/>

            <div className={s.secondNavigationBlock}>
                <MusicUploadForm />
                <ChooseSongList songs={songs} />
            </div>

            <SongList songs={songs.favorites.status ? songs.favorites.favSongs : songs.data}/>

            {
                currentSong.song !== null &&
                (
                    <div className={s.currentSong}>
                        <CurrentPlayer songs={songs.favorites.status ? songs.favorites.favSongs : songs.data}  currentSong={currentSong}/>
                    </div>
                )
            }
        </div>
    );
}

export default MusicPlayer;
import React from 'react';
import s from "./MusicPlayer.module.css"
import TopNavigation from "./TopNavigation/TopNavigation";
import SongList from "./SongList/SongList";
import {useSelector} from "react-redux";
import CurrentPlayer from "../CurrentPlayer/CurrentPlayer";

function MusicPlayer(props) {
    const songs = useSelector((state) => {
        return state.songList.data
    })
    const currentSong = useSelector((state) => {
        return state.currentSong
    })

    return (
        <div className={s.player}>
            <h1>Music Player</h1>
            <TopNavigation currentSong={currentSong} songs={songs}/>
            <SongList songs={songs}/>
            {
                currentSong.song !== null &&
                (
                    <div className={s.currentSong}>
                        <CurrentPlayer songs={songs}  currentSong={currentSong}/>
                    </div>
                )
            }

        </div>

    );

}

export default MusicPlayer;
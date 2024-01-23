import React from 'react';
import s from "./SongRow.module.css"
import {MdDone} from "react-icons/md";
import {TiArrowForward, TiHeartFullOutline} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {playSong, togglePlaying} from "../../../../features/currentSong/currentSongSlice";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import IconButton from "@mui/material/IconButton";
import secondToMinute from "../../../../utils/secondToMinute";

function SongRow({song}) {
    const dispatch = useDispatch()
    const currentSong = useSelector((state) => {
        return state.currentSong
    })


    return (
        <tr className={s.songRow}>
            <td>
                <span
                    className={s.iconButton}
                    onClick={() => {
                        if(!currentSong.audio){
                            dispatch(playSong({song}))
                        } else {
                            if(currentSong.song.id === song.id){
                                currentSong.isPlayed ? currentSong.audio.pause() : currentSong.audio.play()

                            } else {
                                currentSong.audio.pause()
                                dispatch(playSong({song}))
                            }

                        }



                    }}
                >
                    <span className={s.playIcon}>
                        <IconButton
                            aria-label={!currentSong.isPlayed ? 'play' : 'pause'}
                            onClick={() => {
                                console.log(currentSong)
                                console.log(song)
                                if(currentSong?.song?.id === song?.id){
                                    dispatch(togglePlaying())
                                }
                            }}
                        >
                            {currentSong.isPlayed && currentSong.song.id === song.id ? (
                                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={"#000"} />
                            ) : (
                                <PlayArrowRounded
                                sx={{ fontSize: '3rem' }}
                                htmlColor={"#000"}
                                />
                            )}
                        </IconButton>
                    </span>
                    <img
                        className={s.songImage}
                        src={song.preview}
                        alt="Song-image"
                    />
                </span>
            </td>
            <td>{song.title}</td>
            <td>{song.artists}</td>
            <td>{song.id}</td>
            <td>{secondToMinute(song.duration)}</td>
            <td>
                <div className={s.songIconsBlock}>
                    <span className={s.iconButton}><TiHeartFullOutline /></span>
                    <span className={s.iconButton}><MdDone /></span>
                    <span className={s.iconButton}><TiArrowForward /></span>
                </div>
            </td>
        </tr>
    );
    
}

export default SongRow;
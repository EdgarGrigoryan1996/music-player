import React from 'react';
import s from "./SongList.module.css"
import SongRow from "./SongRow/SongRow";

function SongList(props) {
    if(props.songs.length > 0){
        return (
            <div className={s.songs}>
                <table className={s.songsTable}>
                    <tr>
                        <th></th>
                        <th>Song Name</th>
                        <th>Artist Name</th>
                        <th>Track</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                    {props.songs.map((song) => {
                        return (
                            <SongRow songs={props.songs} song={song}/>
                        )
                    })}
    
                </table>
            </div>
    
        );
    } else {
        return (
            <div>
                <iframe style={
                        {
                            border:"none",
                            width:"100%",
                            height:"70vh"
                        }
                    } src="https://lottie.host/embed/a87d1aba-5b22-4331-b85a-c665d2f362b0/wnAZY773PX.json"></iframe>
            </div>
        )
    }
    

}

export default SongList;
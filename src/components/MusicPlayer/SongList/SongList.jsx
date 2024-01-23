import React from 'react';
import s from "./SongList.module.css"
import SongRow from "./SongRow/SongRow";

function SongList(props) {

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
                        <SongRow song={song}/>
                    )
                })}

            </table>
        </div>

    );

}

export default SongList;
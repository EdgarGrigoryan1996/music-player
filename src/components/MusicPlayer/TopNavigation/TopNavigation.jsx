import React, {useEffect, useState} from 'react';
import s from  "./TopNavigation.module.css"
import Button from "../../Button/Button";
import {FaPause, FaPlay, FaPlus} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import MySelect from "./MySelect/MySelect";
import {useDispatch} from "react-redux";
import {filterByName, sort} from "../../../features/songList/songListSlice";
import {playAll, playAllWithSong, togglePlayAll} from "../../../features/currentSong/currentSongSlice";


const options = [
    { value: 'name', label: 'Sort By Song Name' },
    { value: 'artist', label: 'Sort By Artist Name' },
    { value: 'id', label: 'Sort By Track Id' },
    { value: 'reverse', label: 'Sort By Id Reverse' }
]

const filterByCurrentText = (dispatch,action,currentText) => {
    dispatch(action(currentText))
}

const handlePlayAll = (dispatch,action,payload) => {
    dispatch(action(payload))
}

function TopNavigation(props) {
    const dispatch = useDispatch()
    const [searchSongText, setSearchSongText] = useState("")
    const [selectedValue, setSelectedValue] = useState(null)
    const playAllSongsPayload = {
        song:props.songs[0],
        songs:props.songs
    }
    console.log(props.currentSong.playAll)
    useEffect(() => {
        filterByCurrentText(dispatch,filterByName,searchSongText)
    },[searchSongText])
    useEffect(() => {
        console.log(props.songs)
        if(selectedValue !== null){
            dispatch(sort(selectedValue.value))
        }

    },[selectedValue])

    return (
        <div className={s.topNavigationWrapper}>
            <div className={s.topNavigationBlock}>
                <div className={s.navigationLine}>
                    <Button
                        onclick={() => {
                            if(props.songs.length === 0) {
                                alert("No Songs to Play")
                            } else {
                                if(props.currentSong.audio){
                                    handlePlayAll(dispatch,playAll,playAllSongsPayload)
                                } else {
                                    handlePlayAll(dispatch,playAllWithSong,playAllSongsPayload)
                                }
                            }
                            
                        }
                    }
                        title="Play All"
                        icon={props.currentSong.playAll ? <FaPause /> : <FaPlay />}
                        style={ props.currentSong.playAll ?
                            (
                                {
                                    background:"#282828",
                                    color:"#f8f8f8",
                                }
                            )
                            :
                            null

                    }
                    />
                    <Button title="Add All" icon={<FaPlus />}/>
                </div>
                <div className={s.navigationLine}>
                    <MySelect
                        options={options}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    />
                    <div className={s.searchSongControllerBlock}>
                        <CiSearch />
                        <input
                            className={s.searchSongController}
                            type="text"
                            value={searchSongText}
                            onChange={(e) => {
                                    setSearchSongText(e.target.value)
                                    // dispatch(filterByName(searchSongText))

                                }
                            }
                            placeholder="Filter"
                        />
                    </div>

                </div>
            </div>
        </div>
    );

}

export default TopNavigation;
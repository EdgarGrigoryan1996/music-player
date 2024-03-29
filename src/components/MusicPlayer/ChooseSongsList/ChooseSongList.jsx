import { useDispatch } from "react-redux"
import s from "./ChooseSongList.module.css"
import {FaMusic} from "react-icons/fa";
import { showAllSongs, showFavorites } from '../../../features/songList/songListSlice';
import Button from "../../Button/Button";
import React from "react";
import {MdFavorite} from "react-icons/md";

const ChooseSongList = (props) => {

    const dispatch = useDispatch()
    
    return (
        <div className={s.chooseSongsList}>
                <Button
                title="All Songs" 
                icon={<FaMusic/>}
                style={ !props.songs.favorites.status ?
                    (
                        {
                            background:"#282828",
                            color:"#f8f8f8",
                        }
                    )
                    :
                    null
            }
            onclick={() => dispatch(showAllSongs())}
                />
                <Button 
                title="Favorites" 
                icon={ <MdFavorite />}
                style={props.songs.favorites.status ?
                    (
                        {
                            background:"#282828",
                            color:"#f8f8f8",
                        }
                    )
                    :
                    null
            }
            onclick={() => dispatch(showFavorites())}
                />
            </div>
    )
}

export default ChooseSongList
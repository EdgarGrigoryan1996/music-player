import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import CloseRounded from "@mui/icons-material/CloseRounded";
import {useEffect, useState} from "react";
import formatDuration from "../../utils/formatDuration";
import {useDispatch} from "react-redux";
import {closeCurrentSong, playSong, togglePlaying} from "../../features/currentSong/currentSongSlice";
import findNextSong from "../../utils/findNextSong";
import findPreviousSong from "../../utils/findPreviousSong";


const WallPaper = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&::before': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        top: '-40%',
        right: '-50%',

    },
    '&::after': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        bottom: '-50%',
        left: '-30%',
        background: 'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
        transform: 'rotate(30deg)',
    },
});

const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: "80%",
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.1)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});
const CloseButton = styled('span')({
    position:"absolute",
    top:"15px",
    right:"20px",
})

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const CurrentPlayer = ({songs,currentSong}) => {

    const dispatch = useDispatch()
    const theme = useTheme();
    const duration = currentSong.song.duration;
    const [position, setPosition] = useState(0);
    const sliderCurrentTime = Math.round((position / duration) * 100);

    useEffect(() => {
        let timeInterval;
        if(currentSong.playAll !== true){
            currentSong.audio.play()
             timeInterval = setInterval(() => {
                setPosition(currentSong.audio.currentTime)
            },1000)
        } else {
            currentSong.audio.play()
             timeInterval = setInterval(() => {
                setPosition(currentSong.audio.currentTime)
                if(Math.round(currentSong.audio.currentTime) === duration){
                    const nextSong = findNextSong(currentSong.playAllSongs,currentSong.song)
                    dispatch(playSong({song:nextSong}))
                }

            },1000)
        }

        return () => {
            clearInterval(timeInterval)
        }
    }, [currentSong.song,currentSong.playAll])

    useEffect(() => {
        setPosition(0)
    },[currentSong.song])

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    const handleChangeCurrentTime = (_, value) => {
        const time = Math.round((value / 100) * duration);
        setPosition(time);
        currentSong.audio.currentTime = time;
    };

    return (
        <>

            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <Widget>
                    <CloseButton onClick={() => {
                        dispatch(closeCurrentSong())
                        currentSong.audio.pause()
                    }}>
                        <IconButton aria-label="previous song">
                            <CloseRounded fontSize="large" htmlColor={mainIconColor} />
                        </IconButton>
                    </CloseButton>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CoverImage>
                            <img
                                alt="can't win - Chilling Sunday"
                                src={currentSong.song.preview}
                            />
                        </CoverImage>
                        <Box sx={{ ml: 1.5, minWidth: 0 }}>
                            <Typography variant="caption" color="text.secondary" fontWeight={500}>
                                {currentSong.song.artists}
                            </Typography>
                            <Typography noWrap>
                                {currentSong.song.title}
                            </Typography>

                        </Box>
                    </Box>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={sliderCurrentTime}
                        min={0}
                        step={1}
                        max={100}
                        onChange={handleChangeCurrentTime}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            height: 4,
                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&::before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${
                                        theme.palette.mode === 'dark'
                                            ? 'rgb(255 255 255 / 16%)'
                                            : 'rgb(0 0 0 / 16%)'
                                    }`,
                                },
                                '&.Mui-active': {
                                    width: 20,
                                    height: 20,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: -2,
                        }}
                    >
                        <TinyText>{formatDuration(position)}</TinyText>
                        <TinyText>-{formatDuration(duration - position)}</TinyText>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: -1,
                        }}
                    >
                        <span onClick={() => {
                            const previousSong = findPreviousSong(songs,currentSong.song)
                            if(currentSong?.audio &&  !currentSong.audio.paused ){
                                currentSong?.audio?.pause()
                            }
                            dispatch(playSong({song:previousSong}))
                        }}>
                            <IconButton aria-label="previous song">
                                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                            </IconButton>
                        </span>

                        <IconButton
                            aria-label={!currentSong.isPlayed ? 'play' : 'pause'}
                            onClick={() => {
                                if(currentSong.isPlayed){
                                    currentSong.audio.pause()
                                    dispatch(togglePlaying())
                                } else {
                                    currentSong.audio.play()
                                    dispatch(togglePlaying())
                                }
                            }}
                        >
                            {!currentSong.isPlayed ? (
                                <PlayArrowRounded
                                    sx={{ fontSize: '3rem' }}
                                    htmlColor={mainIconColor}
                                />
                            ) : (
                                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                            )}
                        </IconButton>
                        <span onClick={() => {
                            const nextSong = findNextSong(songs,currentSong.song)
                            if(currentSong?.audio &&  !currentSong.audio.paused ){
                                currentSong?.audio?.pause()
                            }
                            dispatch(playSong({song:nextSong}))
                        }}>
                            <IconButton aria-label="next song" onclick={() => alert("test")}>
                                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                            </IconButton>
                        </span>
                    </Box>
                </Widget>
                <WallPaper />
            </Box>
        </>
    );
}

export default CurrentPlayer
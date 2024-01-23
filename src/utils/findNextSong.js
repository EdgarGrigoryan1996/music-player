const findNextSong = (songs,currentSong) => {
    const index = songs.indexOf(currentSong)
    if(index < songs.length - 1){
        return songs[index + 1]
    } else {
        return songs[0]
    }
}

export default findNextSong
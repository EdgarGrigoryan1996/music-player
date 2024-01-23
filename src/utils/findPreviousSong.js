const findPreviousSong = (songs,currentSong) => {
    const index = songs.indexOf(currentSong)
    if(index > 0){
        return songs[index - 1]
    } else {
        return songs[songs.length - 1]
    }
}

export default findPreviousSong
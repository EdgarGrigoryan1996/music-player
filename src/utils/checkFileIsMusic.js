const checkFileIsMusic = (text) => {
    const ext = text.split("").slice(text.length - 3).join("")
    if(ext === "mp3" || ext === "wav"){
        return true
    } else {
        return false
    }
}

export default checkFileIsMusic
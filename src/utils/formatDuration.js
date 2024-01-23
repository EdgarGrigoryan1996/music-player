const  formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft <= 9 ? `0${Math.round(secondLeft) }` : Math.round(secondLeft)}`;
}

export default formatDuration
import moment from "moment"
const secondToMinute = (second) => moment.utc(second * 1000).format("mm:ss")

export default secondToMinute
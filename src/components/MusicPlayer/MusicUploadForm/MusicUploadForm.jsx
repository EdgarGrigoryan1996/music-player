import { useEffect, useRef, useState } from "react"
import Button from "../../Button/Button"
import s from "./MusicUploadForm.module.css"
import loadingIcon from "../../../assets/animatedIcons/loading.svg"
import checkFileIsMusic from "../../../utils/checkFileIsMusic"


const MusicUploadForm = () => {

    const uploadBtnRef = useRef(null)
    const [uploadFile, setUploadFile] = useState(null)
    const [uploadStatus, setUploadStatus] = useState({
        isUploading:false,
        success:null
    })
    const [isUploading, setIsUploading] = useState(false)

    useEffect(() => {
        if(isUploading){
            checkUploadingFile()
        }
    },[isUploading])

    const checkUploadingFile = (e) => {

        setUploadStatus({
            ...uploadStatus,
            isUploading:true
        })
        setTimeout(() => {
            setUploadStatus({
                success:true,
                isUploading:false
            })
            setIsUploading(false)
            if(checkFileIsMusic(uploadBtnRef.current.files[0].name)){
                setUploadFile(uploadBtnRef.current.files[0])
            } else {
                setUploadStatus({
                    isUploading:false,
                    success:false
                })
            }
        },2000)
    }
    return (
        <div className={s.musicUploadForm}>
            <Button 
            title={uploadFile ? uploadFile.name : uploadStatus.isUploading ? "Loading..." : "Choose Music File"}
            icon={uploadStatus.isUploading ? loadingIcon : null} 
            onclick={() => uploadBtnRef.current.click()}
            style={{
                height:"50px"
            }}
            >
                <input ref={uploadBtnRef} className={s.uploadInput} type="file" onChange={(e) => {
                    setIsUploading(true)
                }}/>
            </Button>
            {uploadFile && 
                <span className={s.removeUploadMusic} onClick={() => {
                    setUploadFile(null)
                }
            }>x</span>
            }
            {uploadStatus.success === false && <span className={s.musicTypeErrMsg}>File type is not valid</span>}
            
        </div>
    )
}

export default MusicUploadForm
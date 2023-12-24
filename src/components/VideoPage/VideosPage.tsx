import { useEffect, useMemo, useState } from "react"
import { IVideo } from "../../types/video.interfaces"
import { useUnit } from "effector-react"
import { $videos, setVideos } from "../../context"
import { GetdataFx } from "../../api/api"
import './style.css'

export const VideosPage = () => {
    const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
    const URL = `https://api.pexels.com/videos/search?query=ocean`
    const [useVideo, setUseVideo] = useState<IVideo[]>()
    const [title, setTitle] = useState()
    const store = useUnit($videos)

    const handleGetVideos = async () => {
        const videos = await GetdataFx({url:URL,type:'videos'})
        console.log("videos: ", videos)
        setVideos(videos)
        setUseVideo(store)
    }

    useEffect(() => {
        handleGetVideos()
        console.log("Store ", store)
        console.log("useVideo ", useVideo)
    }, [title])
    return <div className="video-container">

{useMemo(()=>store.map(video=><div className="video-item">
<video width={300} height={300} controls>
    <source src={video.video_files[0].link}/>
</video>
<p>Author: {video.user.name}</p>
<p>{video.duration}</p>

</div>),[store])}
    </div>

}
import { useEffect, useMemo, useState } from "react"
import { IVideo } from "../../types/video.interfaces"
import { useUnit } from "effector-react"
import { $videos, setVideos } from "../../context"
import { GetdataFx } from "../../api/api"


export const VideosPage = () => {
    const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
    const URL = `https://api.pexels.com/videos/search?query=ocean`
    const [useVideo, setUseVideo] = useState<IVideo[]>()
    const [title, setTitle] = useState()
    const store = useUnit($videos)

    const handleGetVideos = async () => {
        const videos = await GetdataFx(URL)
        console.log("videos: ", videos)
        setVideos(videos)
        setUseVideo(store)
    }

    useEffect(() => {
        handleGetVideos()
        console.log("Store ", store)
        console.log("useVideo ", useVideo)
    }, [title])
    return <div>


        {useMemo(() => store.map(video => {
            console.log(video);
            return <ul>
                <li><p>{video.user.name}</p></li>
            </ul>
        }
        ), [store])}

    </div>

}
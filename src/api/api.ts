import axios from "axios"
import { createEffect } from "effector";
import { IUrl } from "../types/interfaces";

const controller = new AbortController
const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
const URL = `https://api.pexels.com/v1/search?query=nature`
export const getPhotosFx = createEffect(async (url: string) => {
    try {
        const { data } = await axios.get(url, { headers: { Authorization: `LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD` } })
        const photos = data.photos
        return photos

    } catch (error) {
        console.log(error)
    }
})
// import { IImage, IData } from "../types/interfaces"

// const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
// const URL = `https://api.pexels.com/v1/search?query=nature`

// export const getPhotos = async () => {
//     let photosData: IData;
//     let  photos:IImage[]=[]
//     await axios.get(URL, { headers: { Authorization: key } })
//         .then((response) => {
//             photosData = response.data
//             if(photosData){
//                 photos.push(photosData.photos)
//             }

//         })
//         console.log(photos)
//         return photos

// }
import axios from "axios"
import { createEffect } from "effector";
const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'

export const GetdataFx = createEffect(async ({url,type}:{url:string,type:string}) => {
    try {
      switch(type){
        case 'photos':{
            const { data } = await axios.get(url, { headers: { Authorization: `LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD` } })
            const photos = data.photos
            return photos
        }
        case 'videos':{
            const { data } = await axios.get(url, { headers: { Authorization: `LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD` } })
            const videos = data.videos
            return videos
        }
      }

    } catch (error) {
        console.log(error)
    }
})

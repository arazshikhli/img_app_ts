import {  createDomain } from "effector";
import { IData,IImage } from "../types/interfaces";

const photos=createDomain()

export const setPhotos=photos.createEvent<IImage[]>()


// export const $photos=photos.createStore<IImage[]>([])
// .on(setPhotos,(_,photos)=>photos)
export const $photos = photos.createStore<IImage[]>([])
    .on(setPhotos, (_, photos) => photos)
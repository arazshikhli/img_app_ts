import { createDomain } from "effector";
import { IData, IImage } from "../types/photo.interfaces";
import { IVideo } from "../types/video.interfaces";

const photos = createDomain()
const videos = createDomain()

export const setPhotos = photos.createEvent<IImage[]>()
export const setVideos = videos.createEvent<IVideo[]>()


export const $photos = photos.createStore<IImage[]>([])
    .on(setPhotos, (_, photos) => photos)

export const $videos = videos.createStore<IVideo[]>([])
    .on(setVideos, (_, videos) => videos)
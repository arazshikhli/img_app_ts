import { useUnit } from "effector-react"
import { useEffect, useMemo, useState } from "react"
import { getPhotosFx } from "../../api/api"
import { $photos, setPhotos } from "../../context"
import { IImage } from "../../types/interfaces"
import { PhotosList } from "./PhotosList"
import React from "react"

export const PhotosPage = ({ search }: { search: string }) => {
  const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
  const URL = `https://api.pexels.com/v1/search?query=nature`

  const controller = new AbortController()
  const [images, setImages] = useState<IImage[]>()
  const [title, setTitle] = useState()
  const store = useUnit($photos)

  const handleGetPhotos = async () => {
    const photos = await getPhotosFx(URL)
    setPhotos(photos)
    setImages(store)
  }

  useEffect(() => {
    handleGetPhotos()
    console.log(handleGetPhotos())
  }, [title])
  return <div>
    {useMemo(() => <PhotosList photos={store} key={Math.random()} />, [store])}
  </div>
}
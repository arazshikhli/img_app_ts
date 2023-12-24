import { useUnit } from "effector-react"
import { useEffect, useMemo, useState } from "react"
import { GetdataFx } from "../../api/api"
import { $photos, setPhotos } from "../../context"
import { IImage } from "../../types/photo.interfaces"
import { PhotosList } from "./PhotosList"
import React from "react"
import { SearchComponent } from "./Search"

export const PhotosPage = () => {
  const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
  const URL = `https://api.pexels.com/v1/search?query=nature`
  const [images, setImages] = useState<IImage[]>()
  const [title, setTitle] = useState()
  const store = useUnit($photos)

  const handleGetPhotos = async () => {
    const photos = await GetdataFx({url:URL,type:'photos'})
    setPhotos(photos)
    setImages(store)
  }

  useEffect(() => {
    handleGetPhotos()
    console.log(handleGetPhotos())
  }, [title])
  return <div>
    {/* <SearchComponent searchValue={searchValue} setSearchValue={setSearchValue} /> */}
    {useMemo(() => <PhotosList photos={store} key={Math.random()} />, [store])}
  </div>
}
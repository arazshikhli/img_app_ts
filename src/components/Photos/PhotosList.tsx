import { Skeleton } from "@mui/material"
import { IImage } from "../../types/photo.interfaces"
import './style.css'
import { url } from "inspector"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PhotoPage } from "./PhotoPage"
export const PhotosList = ({ photos }: { photos: IImage[] }) => {

  const [filteredList, setFilteredList] = useState<IImage[]>(photos)
  const [searchValue, setSearchValue] = useState('')

  // const getFilteredPhotos = () => {

  //   // const filteredImages = photos.filter(filtered => filtered.photographer?.includes(search))
  //   // setFilteredList(filteredImages)
  //   console.log(searchValue)
  // }
  // useEffect(() => {
  //   setSearchValue(searchValue)
  //   console.log("searchValue: ", searchValue)
  // }, [searchValue])
  return <>
    <div className="search-container">
      <span>Поиск</span>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
      <p>{searchValue}</p>
    </div>
    <div className='wrapper1'>
      {
        photos.filter(photo => photo.photographer?.toLowerCase().includes(searchValue)).
          map((filtered) =>

            <ul>
              <PhotoPage image={filtered} />
            </ul>

          )
      }
    </div>
  </>
}
import { Skeleton, TextField, Typography } from "@mui/material"
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
      <Typography variant="h6" sx={{
        margin: '20px 0 10px 0 ',
      }}>Search Image:</Typography>
      {/* <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      /> */}
      <TextField
        type="text"
        className="search-input"
        value={searchValue}
        sx={{
          marginBottom: '20px',
          borderRadius: '5px'
        }}
        onChange={event => setSearchValue(event.target.value)}
      />
    </div>
    <div className='wrapper1'>
      {
        photos.filter(photo => photo.photographer?.toLowerCase().includes(searchValue)).
          map((filtered) =>
            filtered ? (
              <div>
                <PhotoPage image={filtered} />
              </div>) : (<h1 style={{ color: 'wheat' }}>No items</h1>)

          )
      }
    </div>
  </>
}
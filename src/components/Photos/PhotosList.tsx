import { Skeleton } from "@mui/material"
import { IImage } from "../../types/interfaces"
import './style.css'
import { url } from "inspector"
export const PhotosList = ({ photos }: { photos: IImage[] }, { search }: { search: string }) => {
  console.log(photos)
  return <>
    <div className='wrapper'>

      {
        photos.filter(photo => photo.photographer?.includes(search)).
          map((filtered) =>
            <ul>
              <div className='item'
              >
                <div style={{
                  width: '100%', height: '200px', backgroundImage: `url('${filtered.src.original}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}></div>
                <div className='title'>
                  {filtered ? (<li><p>Author: {filtered.photographer}</p></li>) : <Skeleton variant='text' width={300} height={20} className='skeleton' />}
                  <Skeleton variant="text" width={300} height={20} className="skeleton" />
                  <li><button className='btn'>more info...</button></li>
                </div>
              </div>
            </ul>

          )
      }
    </div>
  </>
}
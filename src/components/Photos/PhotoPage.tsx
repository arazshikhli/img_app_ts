import { Skeleton } from "@mui/material";
import { IImage } from "../../types/photo.interfaces";
import './style.css'

export const PhotoPage = ({ image }: { image: IImage }) => {
    return (
        <div className='item'
        >
            <div style={{
                width: '100%', height: '200px', backgroundImage: `url('${image.src.original}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}></div>
            <div className='title'>
                {image ? (<li><p>Author: {image.photographer}</p></li>) : <Skeleton variant='text' width={300} height={20} className='skeleton' />}
                <p>Liked: {image.liked}</p>
            </div>
            <button className="btn">More Info</button>
        </div>
    )
}
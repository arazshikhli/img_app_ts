import { Skeleton } from "@mui/material";
import { IImage } from "../../types/photo.interfaces";
import './style.css'

export const PhotoPage = ({ image }: { image: IImage }) => {


    return (
        <div className='item'>
            {image ? (<div className="image-cont" style={{
                backgroundImage: `url('${image.src.original}')`,
            }}></div>) : (<Skeleton variant="rectangular" width={300} height={300} />)}
            <div className='title'>
                {image ? (<li><p>Author: {image.photographer}</p></li>) : <Skeleton variant='text' width={300} height={20} className='skeleton' />}
                <p>Liked: {image.liked}</p>
            </div>
            <button className="btn">More Info</button>
        </div>
    )
}
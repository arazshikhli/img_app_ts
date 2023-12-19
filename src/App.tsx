import React, { useEffect, useState } from 'react';
import { IImage } from './types/interfaces';
import './App.css';
import axios from 'axios';
function App() {
  const key = 'LmimnbcCCFaWU7wgWSua5vVWVmONrzv8xKKtfXhU9c39TLMYIeSf7UOD'
  const URL = `https://api.pexels.com/v1/search?query=nature`

  const [images, setImages] = useState<IImage[]>()

  console.log("Image 0 ", images)
  useEffect(() => {
    axios.get(URL, { headers: { Authorization: key } })
      .then((response) => {

        setImages(response.data.photos)
        const img: IImage[] = response.data.photos;

      })
  }, [images])
  return (
    <div className="App">
      <div className='wrapper'>
        {images?.map((image, idx) => <ul>
          <div className='item'>

            <li><img src={image.src.original} /></li>
            <div className='title'>
              <li><p>{image.alt}</p></li>
              <li><p>Author: {image.photographer}</p></li>
              <li><button className='btn'>more info...</button></li>
            </div>
          </div>
        </ul>)}
      </div>
    </div>
  );
}

export default App;

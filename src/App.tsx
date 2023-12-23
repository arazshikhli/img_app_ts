import React, { useEffect, useState } from 'react';
import { IImage } from './types/photo.interfaces';
import './App.css';

import { Header } from './components/Header';

import { PhotosPage } from './components/Photos/PhotosPage';
import { SearchComponent } from './components/Photos/Search';
import { VideosPage } from './components/VideoPage/VideosPage';


function App() {

  return (<><div className='App'>
    <Header />
    <VideosPage />
    <PhotosPage />
  </div>

  </>

  );
}

export default App;

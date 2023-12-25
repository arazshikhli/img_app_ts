import React, { useEffect, useState } from 'react';
import { IImage } from './types/photo.interfaces';
import './App.css';

import { Layout } from './components/Layout/Layout';

import { PhotosPage } from './components/Photos/PhotosPage';
import { SearchComponent } from './components/Photos/Search';
import { VideosPage } from './components/VideoPage/VideosPage';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/About/About';
import { WelcomePage } from './components/WelcomePage/WelcomePage';


function App() {

  return (<>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/videos' element={<VideosPage />} />
        <Route path='/photos' element={<PhotosPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  </>


  );
}

export default App;

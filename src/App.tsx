import React, { useEffect, useState } from 'react';
import { IImage } from './types/photo.interfaces';
import './App.css';

import { Layout } from './components/Layout/Layout';

import { PhotosPage } from './components/Photos/PhotosPage';
import { SearchComponent } from './components/Photos/Search';
import { VideosPage } from './components/VideoPage/VideosPage';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (<div className='App'>
<Routes>
  <Route path='/' element={<Layout/>}> 
  <Route path='/videos' element={<VideosPage/>}/>
  <Route path='/photos' element={<PhotosPage/>}/>
  </Route>
</Routes>
  </div>

  );
}

export default App;

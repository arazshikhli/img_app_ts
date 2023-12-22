import React, { useEffect, useState } from 'react';
import { IImage } from './types/interfaces';
import './App.css';

import { Header } from './components/Header';

import { PhotosPage } from './components/Photos/PhotosPage';
import { SearchComponent } from './components/Photos/Search';


function App() {
  const [searchValue, setSearchValue] = useState('')
  return (<><div className='App'>
    <Header />
    <SearchComponent search={searchValue} />
    <PhotosPage search={searchValue} />
  </div>

  </>

  );
}

export default App;

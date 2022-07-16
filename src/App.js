import React from 'react';
import './App.css';
import  {Container }from '@material-ui/core';
import  { BrowserRouter ,  Route , Routes } from "react-router-dom"
import Header from './component/header/Header'
import SimpleBottomNavigation from './component/mainNav/MainNav';


import Movies from './component/pages/Movies'
import Search from './component/pages/Search'
import Series from './component/pages/Series'
import Trending from './component/pages/Trending'

function App() {
  return (
    <>
<BrowserRouter>
   <Header/>
   {/* <h1 className='app'>Hello World</h1> */}
   <Container>
       <Routes  >
            <Route  path="/"  exact  element={<Trending/>} />
            <Route   path="/movies"  element={<Movies/>}     /> 
            <Route  path="/series"  element={<Series/>}      />
            <Route  path="/search"  element={<Search/>}     />
       </Routes> 
   </Container>
</BrowserRouter>
    {/* <SimpleBottomNavigation /> */}
    
    </>

  );
}

export default App;
   
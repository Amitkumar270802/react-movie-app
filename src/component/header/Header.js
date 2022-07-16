import React from 'react'
import './Header.css';
import  { Link } from "react-router-dom"
const Header = () => {
  return (
    <div >
         {/* <span className='header' onClick={()=>window.scroll(0,0)}>Entertainment Hub</span> */}
         <div className='container'>
         {/* <div> */}

              <span className='name' >Entertainment</span>
         {/* </div> */}
              <ul>
                <Link className='link' to="/"><li> Trending</li></Link>
                <Link className='link' to="/movies"><li> Movies</li></Link>
                <Link className='link' to="/series"><li> TvShow </li></Link>
                <Link className='link' to="/search"><li> Search</li></Link>
              </ul>
         </div>
    </div>
  )
}

export default Header

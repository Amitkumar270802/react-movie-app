import React, { useEffect, useState } from 'react'
import './Trending.css'

import SingleContent from '../singelContent/SingleContent';
import CustomPagination from '../pagination/CustomPagination';
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Trending = () => {

     const [data , setData]=useState();
     const [page , setPage]=useState(1);

     
    //  At Every page it fetch PI
       useEffect(()=>{
         getData1();
       },[page])
     

      //  fetch API
      // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=IN&page=${page}
      function getData1(){
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=hi-IN&region=IN&with_original_language=hi
            `)
            .then((result)=>{
              result.json().then((respond)=>{
                setData(respond.results)
                console.warn(respond.results)
              })
            }) 
     
         
       }
     
      // Top to Page 
       function top(){
         window.scroll(0,0);
       }

       return (
         <>
         <div className='con_tainer'>
           <div className='pageTitle'>Trending </div>
           <div className="trending">
             {
               data&&data.map(
               (item) => <SingleContent key={item.id} 
                id={item.id}
                   poster={item.poster_path}
                     title={item.title  ||item.name}
                       date={item.release_date||item.first_air_date}  
                       media_type={item.media_type}
                         vote={item.vote_average}
                               />

               )
             }
           </div>   
          <CustomPagination setPage={setPage}/> 
          </div>
          <span className='topIcon' onClick={top}><BsFillArrowUpCircleFill/></span>
         </>
  );
};
export default Trending
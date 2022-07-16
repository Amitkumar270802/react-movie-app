

import React, { useEffect, useState } from 'react'
import './Trending.css'
import SingleContent from '../singelContent/SingleContent';
import CustomPagination from '../pagination/CustomPagination';
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import Button from '@material-ui/core/Button';
// import Genres from '../genres/Genres';



const Series = () => {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [btn,setBtn]=useState(0);
  
  // const [genres, setGenres] = useState([]);
  // // const [numOfPages, setNumOfPages] = useState();
  // const [selectedGenres, setSelectedGenres] = useState([]);

     
  //  At Every page it fetch PI
     useEffect(()=>{
       getData1();
       },[page,btn])
      
      function getData1(){
         if(btn===0){
          fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
          `).then((result)=>{
            result.json().then((respond)=>{
              setData(respond.results)
            console.warn(respond.results)
          })
        }) 
      }
       if(btn===1){
         fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=hi-IN&region=IN&with_original_language=hi&sort_by=popularity.desc&page=${page}&include_adult=false&include_video=false
         `).then((result)=>{
           result.json().then((respond)=>{
             console.warn('btn = '+btn)
             setData(respond.results)
             console.warn(respond.results)
           })
         }) 
       }
       if(btn===2){
         fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=hi-IN&region=IN&with_original_language=te&sort_by=popularity.desc&page=${page}
         `).then((result)=>{
           result.json().then((respond)=>{
             console.warn('btn = '+btn)
             setData(respond.results)
             console.warn(respond.results)
           })
         }) 
       }
        }
 
  // Top to Page 
   function top(){
     window.scroll(0,0);
   }
 
 function newBtn_0(){
 setBtn(0);
 window.scroll(0,0);
 setPage(1)
}
function newBtn_1(){
  setBtn(1);
  window.scroll(0,0);
  setPage(1)
}
function newBtn_2(){
   window.scroll(0,0);
   setPage(1)
 setBtn(2);
 }
  
  return (
    <>
      <span className="pageTitle" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>TV Show / Series</span>
       <div className="btns">
           <Button variant="contained" className='btn' onClick={()=>newBtn_0()} color="secondary">Hollywood</Button>
           <Button variant="contained" className='btn' onClick={()=>newBtn_1()} color="secondary">Bollywood</Button>
           <Button variant="contained" className='btn' onClick={()=>newBtn_2()} color="secondary">Tollywood</Button>

      </div>        
      {/* <Genres  type="movie"
        setSelectedGenres={setSelectedGenres} 
        selectedGenres={selectedGenres}
        genres={genres}  
        setGenres={setGenres}
        setPage={setPage}/> */}
 

 <div className="trending">
 {
   data&&data.map((item) => <SingleContent 

              key={item.id}
              id={item.id}   
              poster={item.poster_path}  
              title={item.title  ||item.name}  
              date={item.release_date||item.first_air_date}  
               media_type={"tv"}  
              vote={item.vote_average} />
   )
 }
 <CustomPagination setPage={setPage} numOfPages={52}    />    
</div>
<span className='topIcon' onClick={()=>{top()}}><BsFillArrowUpCircleFill/></span>
</>
);
};
export default Series




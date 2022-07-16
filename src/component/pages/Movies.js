import React, { useEffect, useState } from 'react'
import SingleContent from '../singelContent/SingleContent';
import './Trending.css'
import CustomPagination from '../pagination/CustomPagination';
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import Button from '@material-ui/core/Button';

import Genres from '../genres/Genres';



const Movies = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  // const [genres, setGenres] = useState([]);
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const genreforURL = useGenre(selectedGenres);

  const [btn,setBtn]=useState(0);
     
  //  At Every page it fetch PI
     useEffect(()=>{
       getData1();
      },[page,btn])

  function getData1(){
     if(btn===0){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
        `).then((result)=>{
          result.json().then((respond)=>{
            setData(respond.results)
            console.warn(respond.results)
          })
        }) 
      }
     else if(btn===1){
       fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&region=IN&with_original_language=hi&sort_by=popularity.desc&page=${page}
       `).then((result)=>{
         result.json().then((respond)=>{
           console.warn('btn = '+btn)
           setData(respond.results)
           console.warn(respond.results)
         })
       }) 
     }
     else{
       fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_original_language=te&sort_by=popularity.desc&page=${page}
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
 setPage(1)
}
function newBtn_1(){
  setBtn(1);
  setPage(1)
}
function newBtn_2(){
   setPage(1)
 setBtn(2);
 }
  
  return (
    <>
     <span className="pageTitle"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Movies</span>
        <div className="btns">
           <Button variant="contained" className='btn' onClick={()=>newBtn_0()} color="secondary" >Hollywood</Button>
           <Button variant="contained" className='btn' onClick={()=>newBtn_1()} color="secondary" >Bollywood</Button>
           <Button variant="contained" className='btn' onClick={()=>newBtn_2()} color="secondary" >Tollywood</Button>

           </div> 

      
   {/* { <Genres  type="movie"
        setSelectedGenres={setSelectedGenres} 
        selectedGenres={selectedGenres}
        genres={genres}  
        setGenres={setGenres}
        setPage={setPage}/>
    } */}

  <div className="trending">
  {
    data&&data.map((item) => <SingleContent 

               key={item.id}
               id={item.id}   
               poster={item.poster_path}  
               title={item.title  ||item.name}  
               date={item.release_date||item.first_air_date}  
              media_type={"movie"}  
               vote={item.vote_average} />
    )
  }
 <CustomPagination setPage={setPage}  numOfPages={500}   />    
</div>
<span className='topIcon' onClick={top}><BsFillArrowUpCircleFill/></span>
</>
);
};
export default Movies


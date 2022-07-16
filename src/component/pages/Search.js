import React, { useEffect, useState } from 'react'
import {TextField}  from '@material-ui/core';
import SearchIcon  from '@material-ui/icons/Search'
import {Button, Tabs ,Tab } from '@mui/material'; 
import CustomPagination from '../pagination/CustomPagination';
import SingleContent from '../singelContent/SingleContent';

// import Genres from '../genres/Genres';



const Search = () => {

  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const [numOfPages, setNumOfPages] = useState();

  const [type,setType]=useState(0);
  const [searchText,setSearchText]=useState()


  // To Fetch API every time when pahe is changed
  useEffect(()=>{
    window.scroll(0,0);
    fetchApi();
  },[type,page])




 // Fetch API
       function fetchApi(){
         fetch(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&query=${searchText}&page=${page}&include_adult=false&include_video=false
         `).then((result)=>{
       result.json().then((respond)=>{
         setData(respond.results)
         console.warn(respond.results)
       })
     }) 
       }




  return (
    <>
      <span className="pageTitle">Search</span>
    
    <div style={{display:"flex" , margin:"15px 0"}}>
      <TextField style={{flex:1}} className="searchBox" label="Search" variant="filled" onChange={(e)=>setSearchText(e.target.value)}/>
      <Button variant="contained" style={{marginLeft:10}}   onClick={fetchApi}><SearchIcon/></Button>
    </div>

    <div>
      <Tabs  value={type} indicatorColor="primary" textColor="primary"  onChange={(event,newValue)=>{setType(newValue); setPage(1)}}>
           <Tab  style={{width:"50%"}} label="Search movies"/>
           <Tab  style={{width:"50%"}} label="Search Series" />
      </Tabs>
    </div>

    <div className="trending">
        {
          data&&data.map((item) => (<SingleContent 

                     key={item.id}
                     id={item.id}   
                     poster={item.poster_path}  
                     title={item.title  ||item.name}  
                     date={item.release_date||item.first_air_date}  
                     media_type={type?"tv":"movie"}  
                     vote={item.vote_average} 
                     />
          ))
        }
     </div>
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
  )
}

export default Search
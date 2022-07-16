import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
// import {Navigate} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
    color:"pink",
    position:"fixed",
    bottom:0,
    zIndex:100,
    backgroundColor:"#2d313a"

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
//   const navigate = Navigate();


// useEffect(()=>{
//   if(value===1) navigate('/')
//   else if(value===2) navigate('/movie')
//   else if(value===3) navigate('/search')
// },[value])


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  style={{color:"white" }}   label="Trending" icon={<WhatshotIcon  />} />
      <BottomNavigationAction  style={{color:"white" }}   label="Movie " icon={<MovieIcon />} />
      <BottomNavigationAction  style={{color:"white" }}   label="TvShow" icon={<TvIcon />} />
      <BottomNavigationAction  style={{color:"white" }}   label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}

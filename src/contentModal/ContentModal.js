import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {img_500,unavailable,unavailableLandscape} from '../component/cofig/config';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './ContentModal.css'

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgba(35, 35, 35, 0.795)"
  },
  paper: {  
    width:"85%",
    height:"80%",
    // backgroundColor:"#39445a",
    backgroundColor:"rgb(43,43,43)",
    border:"2px solid #282c34",
    borderRadius:10,
    color:"white"
  },
}));

export default function ContentModal({children,media_type,id}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [content,setContent]=useState()
  const [video,setVideo]=useState()

  const handleOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };

useEffect(()=>{
  fetchDa();
  fetchVid();
   // eslint-disable-next-line
},[])

function fetchDa(){
  fetch
  ( `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}
  `)
    .then((result)=>{
      result.json().then((response)=>{
        setContent(response)
      })})
    }
    
    function fetchVid(){ 
      fetch
      ( `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}
      `)
      .then((result)=>{
        result.json().then((response)=>{
        console.warn(response)
        setVideo(response.results[0]?.key);
      })})
   }


  return (
    <div>
      <di type="button" className='media' onClick={handleOpen}>
        {children}
      </di>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         {content&& (<div className={classes.paper}>
            <div className="ContentModel">
            <img className='Content_protait' src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable} alt={content.name||content.title} />
            <img className='Content_landscape' src={content.backdrop_path?`${img_500}/${content.backdrop_path}`:unavailable} alt={content.name||content.title} />
            <div className="ContentModel_about">
              <span className='ContentModel_title'>{content.name||content.title}({( content.first_air_date || content.release_date || "......").substring(0,4)})</span>
              {content.tagline&&(<i className='tagline'>{content.tagline}</i>)}
              <span className='ContentModel_description'>{content.overview}</span>
              <div></div>
              <Button
                variant="contained"
                startIcon={<YouTubeIcon/>}
                color="secondary"
                target="_blank"
                href={`https://www.youtube.com/watch?v=${video}`}
              >Trailer</Button>
            </div>
           </div>

          </div>
         )}
        </Fade>
      </Modal>
    </div>
  );
}

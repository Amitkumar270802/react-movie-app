import React from 'react'
import {  img_300 ,  unavailable } from '../cofig/config'
import './SingleContent.css'
import ContentModal from '../../contentModal/ContentModal'


import {Badge }from '@material-ui/core'


const SingleContent = ( {id,  poster,  title,   date,  media_type,  vote   }) => {
  return (
    <ContentModal media_type={media_type} id={id} >
      <Badge  badgeContent={vote} color={ vote  > 6 ?  "primary" : "secondary"  } />
      <img className='poster'   src={  poster ?  ` ${ img_300 }/${poster} `  :  unavailable   }    alt={title}  / >
      <b className='title'>{title}</b>
      <div>
         <span className='subTitle'>{date}</span>
         {/* <span className='subTitle'>{media_type}</span> */}
      </div>
      </ContentModal>
  )
}

export default SingleContent
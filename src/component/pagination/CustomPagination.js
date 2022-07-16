// the some Code is from material-ui

import React from 'react'
import Pagination from '@mui/material/Pagination';


const CustomPagination = ( { setPage , numOfPages  =10  }) => {

  const handelPageChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
  };



  return (
    <div style={{ width:"100%", display:"flex", justifyContent:'center', marginTop:"30px ",}}>
        <Pagination  
          count={numOfPages}
          onChange={ (e)=>{handelPageChange(e.target.textContent )}}
          color="primary"
          hideNextButton
          hidePrevButton
        />
    </div>
  )
}

export default CustomPagination

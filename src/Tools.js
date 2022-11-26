import React, { useState } from 'react'

export default function Tools({data1,data2,active}) {
  
  return (
    <div className='tt'>
    
    <span>
        <button className={active?"red":"diff"} >{data1}</button>
        
    </span>
    </div>
        
  );
  }

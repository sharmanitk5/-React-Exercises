import React, { useState } from 'react'

export default function Assignment({heading,content}) {
 let[active,setActive]=useState("hide")
 let[sign,setSign]=useState("+")
 function toggle(){
  if(active=="hide"){
    setActive("show")
    setSign("-")
   
  }
  else{
    setActive("hide")
    setSign("+")
 
  }
 };
  return (
    <div className='add'>
     <span className='head'>{heading}</span>
       <button onClick={toggle}  className="tog">{sign}</button>
       <p className={active}>{content}</p>
    </div>
  )
}

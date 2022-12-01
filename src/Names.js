import React, { useState } from 'react'

export default function Names() {
  const [items,setItems]=useState(["Apple","HTC","Samsung"]);
 
 function del(itemname){
 setItems( items.filter(x=>x!== itemname))
 }

  return (
    <div>
   {
    items.map(item=><ul><li onClick={()=>del(item)}>{item}</li></ul>)
   }


    </div>
  );
}


import React, { useState } from 'react'

export default function FormDemo() {
 const[table,setTable]=useState("")
 const[numb,setNumb]=useState("")
function number(){
  let list=[]
for(let i=1;i<=10;i++){
  list.push(numb*i);
list.push(<br></br>)
};
setTable(list)



}
  return (
   
    <div>
      <input value={numb}onChange={e=>setNumb(e.target.value)}/>
      <button onClick={number}>Generate</button>
      <h1>Output</h1>
     <h1>{table}</h1>
    </div>
  );
}

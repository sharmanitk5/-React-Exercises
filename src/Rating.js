import React from 'react'

export default function Rating({value,tg}) {

    function add(){
        tg(value)
    }
  return (
    <div>
      <span  onClick={add}className={value >= 1 ? "purple" : "text-gray"}>&#9733;</span>
      <span  onClick={add}className={value >= 2 ? "purple" : "text-gray"}>&#9733;</span>
      <span  onClick={add}className={value >= 3 ? "purple" : "text-gray"}>&#9733;</span>
      <span  onClick={add}className={value >= 4 ? "purple" : "text-gray"}>&#9733;</span>
      <span  onClick={add}className={value >= 5 ? "purple" : "text-gray"}>&#9733;</span>
    </div>
  );
}

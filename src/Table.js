import React from 'react'

export default function Table({text1,text2,text3,text4}) {
  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
          
        </thead>
        <tbody>
        <tr className='row'>
            <td >{text1}</td>
            <td >{text2}</td>
            <td >{text3}</td>
            <td >{text4}</td>
            <button className='last'>Delete</button>
          </tr>
        </tbody>
       </table>
    </div>
  );
}

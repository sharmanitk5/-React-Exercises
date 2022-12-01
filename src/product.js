import React from 'react'

export default function product({name,specifications}) {
  return (
    <div>
        <h2>{name}Apple iphone11</h2>
        <ul>
            {specifications.map(x=><li>{item}</li>)}
            {/* <li>Rear Camera:12 Mp</li>
            <li>front Camera:12 Mp</li>
            <li>OS:IOS</li> */}
        </ul>
    </div>
  )
}

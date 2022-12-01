import React from 'react'

export default function Assign({author,Heading,data,content,date}) {
  return (
    <div>
        <h1>
            {Heading}
        </h1>
        <span>by</span>
        <span>{author}</span>
        <span>{data}</span>
        <span>posted on</span>
        <span>{date}</span>
        <p>{content}</p>

    </div>
  )
}

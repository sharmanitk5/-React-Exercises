import React from 'react'

export default function SecondEx({heading,author,tag,date,content}) {
  return (
    <div className="article">
<h1>{heading}</h1>
<span className="spa">by</span>
<span className="auth">{author}</span>
<span className="ta">{tag}</span>
<span>{date}</span>
<p>{content}</p>

    </div>
  )
}

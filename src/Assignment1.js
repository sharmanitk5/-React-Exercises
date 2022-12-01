import React from 'react'

export default function Assignment1() {
    let products =[ {heading:"Do I have to allow the use of cookies?",content:"Unicorn vinyl poutine brooklyn,next level trade icelanddate."},
  {heading:"How do I change my My page password?",content:"Coloring book forage photo booth gentrify lumbersexual"},
  {heading:"What is Bank ID?",content:"Enamel pin fam sustainable woke whatever venmo"}
  ]
  return (
    <div>
        {
          products.map(x=> <Assignment  heading={x.heading} content={x.content}/>)
        }

    </div>
  )
}

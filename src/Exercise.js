import React from 'react'

export default function Exercise({text,specifications}) {
  return (
    <div className="product">
    <h1>{text}</h1>

    {specifications.map(x=><ul><li>{x}</li></ul>)}

</div>
  );
}

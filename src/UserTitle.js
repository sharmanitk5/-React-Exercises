import React from 'react'

export default function UserTitle({Name,Speaking}) {
  
   
  return (
    
<span className='inlin'> 
  <div className='mute'>{Name}
    <span className={Speaking ? "bottom" : "mic fa fa-microphone-slash"}></span>
    <span className='bottom'>{Name}</span>
    </div>
    </span>
    
    
    
    
   
 
  );
}


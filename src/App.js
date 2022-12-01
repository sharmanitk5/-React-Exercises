import logo from "./logo.svg";
import "./App.css";
import RoundedButton from "./RoundedButton";

import Assign from "./Assign";

import Names from "./Names";
import Exercise from "./Exercise";
import SecondEx from "./SecondEx";
import Assignment from "./Assignment";
import Rating from "./Rating";
import { useState } from "react";
 import Assignment2 from "./Assignment2";
import FormDemo from "./FormDemo";
 function App() {
 
let informations=[{
//   model:"Xiaomi Redmi k40",
//   amount:"Rs.22,490",
//   percentage:"91%"
// },{
//   model:"Xiaomi Mi11 Pro",
//   amount:"Rs.55,490",
//   percentage:"92%"},{
//     model:"OPPO F21 Pro",
//     amount:"Rs.25,490",
//     percentage:"92%"},{
//       model:"Xiaomi Mi Mix 4",
//       amount:"Rs.55,490",
//       percentage:"94%"}];



    let products =[ {heading:"Do I have to allow the use of cookies?",content:"Unicorn vinyl poutine brooklyn,next level trade icelanddate."},
  {heading:"How do I change my My page password?",content:"Coloring book forage photo booth gentrify lumbersexual"},
  {heading:"What is Bank ID?",content:"Enamel pin fam sustainable woke whatever venmo"}
  ]
  
  

  return (
   <div className="App">
 
   
        {
          products.map(x=> <Assignment  heading={x.heading} content={x.content}/>)
        }

    
      
   {/* {
informations.map((x)=><Assignment2 model={x.model} amount={x.amount} percentage={x.percentage}/>)
   } */}
    

{/* <FormDemo></FormDemo> */}



  </div>
  );
  }
export default App;
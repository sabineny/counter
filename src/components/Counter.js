


import React from "react";



function Counter(props){
    
  return(
    <>
    <button onClick={() => props.add10()}>+</button>
    <button onClick={() => props.minus10()}>-</button>
    <button onClick={() => props.reset()}>reset</button>
    </>
  )
}
export default Counter;
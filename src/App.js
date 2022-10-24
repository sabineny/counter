import { useState } from 'react';

import './App.css';
import Counter from './components/Counter';


function App(){
  const[ value, setvalue] = useState(0);

  const increment =() =>{
    setvalue(value+10);
    
  } 
  const decrement =() =>{
    setvalue(value-10);
    
  } 
  const reset =() =>{
    setvalue(0);
    
  } 


  return(

  <>
  
 
    <h1> Number : {value}</h1>
    <Counter add10 = {increment} minus10 ={decrement} reset = {reset} />
  
   
    
 
  
  </>
  );

}

export default App;









// function App() {

//   function clickme(){
//     alert();
//   }
// return(
//   <div className='box-wrapper'>
//   <Box react={clickme} color = "blue"></Box>
//   <Box react={clickme} color = "red"></Box>
//   <Box react={clickme} color = "blue"></Box>
//   <Box react={clickme} color = "red"></Box>
//   <Box react={clickme} color = "blue"></Box>
//   <Box react={clickme} color = "red"></Box>
//   </div>
// )
// }

// export default App;

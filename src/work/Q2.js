import { useState } from "react";

export const Q2 = () => {
  const [value, setValue]=useState('');
  const [result, setResult]=useState('');
  const handle = () => {
      let string='';
      for (let i= value.length-1; i>=0; i--) {
           string +=value[i];
           if (value===string) {
              setResult("Yes it is pelindrome")
          } else {
            setResult("No it is pelindrome")
          }
        }
        
      
  }
  
  return ( 
      <div style={{margin:'20px'}}>
      <strong>Q2:</strong><br></br>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
      <button onClick={handle} style={{margin:'10px'}}> check palidrome</button>
      <strong>{result}</strong>
      </div>
   );

}

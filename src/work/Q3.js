import React, { useState } from 'react'

export const Q3 = () => {

   const [number,setNumber]=useState('')
   const [result,setResult]=useState(null)

   const handle=()=>{
   const data=parseInt(number);

    let factorial=1;
    for(let i=2; i<=number; i++){
        factorial*=i;
    }
    setResult(`factroial is ${data} and result ${factorial}` )
   }

  return (
    <div style={{margin:'20px'}}>
        <strong>Q3:</strong>
        <br></br>
        <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={handle} style={{margin:'10px'}}>check fac</button>
        <div><strong>result:</strong>{result}</div>
    </div>
  )
}

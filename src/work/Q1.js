import React, { useState } from 'react'

export const Q1 = () => {
    const [Data,setData]=useState('')
    const [reverseData,setReverseData]=useState('')
    const [upper,setUpper]=useState('')
    const [lower,setLower]=useState('')

    const handleInput=()=>{
        let store='';
        for(let i=Data.length-1; i>=0; i--){
        store +=Data[i];
        }
        setReverseData(store)
    }

    const handleclick=()=>{
        handleInput();
        setUpper(Data.toUpperCase());
        setLower(Data.toLowerCase());
    }
  return (
    <div style={{margin:'20px'}}>
        <strong>Q1:</strong>
        <br></br>
        <input type='text' value={Data} onChange={(e)=>setData(e.target.value)}></input>
        <button onClick={handleclick} style={{margin:'10px'}}>click</button>
        <div><strong>reverses:{reverseData}</strong></div>
        <div><strong>upper:{upper}</strong></div>
        <div><strong>lower:{lower}</strong></div>
    </div>
  )
}

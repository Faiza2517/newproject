import React, { useState } from 'react'

export const Q5 = () => {
    const [number,setNumber]=useState('') 
    const [array,setArray]=useState([])
    const [sort,setSort]=useState()


const handlenumber=()=>{
  array.push(number)
  setNumber("")
}
    const handle=()=>{
        for(let i=0; i<array.length; i++){
            for(let j=i+1; j<array.length; j++){
                if(array[i]>array[j]){
                  let a=array[i]
                    array[i] = array[j]
                    array[j]=a;
                }
            }
        }
       setSort(array) 
    }

  return (
    <div style={{margin:'20px'}}>
      <strong>Q5:</strong>
      <br></br>
        <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button type='btn' onClick={handlenumber} style={{margin:'10px'}}>add array</button>
        <button onClick={handle} style={{margin:'10px'}}>click sort</button>
        <div><strong>sort:{sort}</strong></div>
    </div>
  )
}

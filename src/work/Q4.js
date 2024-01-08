import React, { useState } from 'react'

export const Q4 = () => {
const [number,setNumber]=useState('')
const [array,setArray]=useState([])
const [maximum,setMaximum]=useState()
const [minimum,setminimum]=useState()

const creatArray=()=>{
  array.push(number)
  setNumber("")
}
console.log(array ,`max`)
const handlemax=()=>{
  let max=0;
  for(let i=0; i<=array.length; i++){
  if(array[i]>max){
    max=array[i]
  }
  setMaximum(max)
  }
}
console.log(typeof array ,'hy')
const handlemini=()=>{
  handlemax();
  let mini=array[0];
  for(let i=0; i<=array.length; i++){
  if(array[i]<mini){
    mini=array[i]
  }
  setminimum(mini)
  }
}
  return (
    <div style={{margin:'20px'}}>
      <strong>Q4:</strong>
      <br></br>
      <input type='text'
      value={number}
      onChange={(e)=>setNumber(e.target.value)}></input>
      <button type='btn' onClick={creatArray} style={{margin:'10px'}}>add array</button>
      <br></br>
      <button type='btn' onClick={handlemini} style={{margin:'10px'}}>click </button><br></br>
      <span><strong>maximum:{maximum}</strong></span>
      <br></br>
      <span><strong>minimum:{minimum}</strong></span>
    </div>
  )
}

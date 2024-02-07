import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const MyDetail = () => {

  const [show,setShow]=useState([])
  let {id}=useParams();
   // const {state} =useLocation()
   const Navigate=useNavigate()

   const handleBack=()=>{
    Navigate(-1);
  
   }
   
   useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setShow(response.data)
        })
        .catch((error) => {
            console.error('error fatching data', error)
        })
}, [])

    return (
      <div>
       {/* <div className="container card">
                   <div>
                <h5 >{state.id}</h5>
                <p>{state.title}</p>
                <p>{state.body}</p>
                <p>{state.userid}</p>
                   </div>
         </div> */} 
         <div className='container'>
          <div style={{marginBottom:10}}>
            <button className='btn btn-success' onClick={handleBack}>
            <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        
         <div className="container card">
                   <div>
                <h5 >{show.id}</h5>
                <p>{show.title}</p>
                <p>{show.body}</p>
                <p>{show.userid}</p>
                   </div>
         </div>
         </div>    
      </div>
    );
  };

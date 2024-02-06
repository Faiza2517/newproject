import React, { useState } from 'react'
import axios from 'axios'

export const From = () => {
     const [formdata,setPost]=useState({title:'',body:''})
     const [errorr,seterrorr]=useState('')

     
     const handleInput=(e)=>{
      setPost({...formdata,[e.target.name]: e.target.value})


}
   const handleSubmit=(e)=>{
    e.preventDefault();
    // validation start
    if (formdata.title.length === 0) {
      seterrorr('title cannot b empty')
      return;
    }
    else if (formdata.title.length <= 3) {
      seterrorr('title add more then three character')
      return;
    }


    else if (formdata.body.length === 0) {
      seterrorr('boday cannot b empty')
      return;
    }
    else if (formdata.body.length >= 500) {
      seterrorr('maximum lenth 500')
      return;
    }
    else {
      seterrorr('submit scuses')
    }
    //end form validation
   axios.post('https://jsonplaceholder.typicode.com/posts',{formdata})
   .then((Response)=>{
    console.log(Response);
   })
   .catch((error)=>{
    console.log(error);
   })
   .finally(()=>{
    e.target.reset()
   })
}

  return (
    <div className='container card' style={{marginTop:15}}>
        <form onSubmit={handleSubmit}>
            Title:<input type='text' onChange={handleInput} name='title' className='form-control'></input><br></br>
            Post: <textarea  onChange={handleInput} name='body'  className='form-control'/><br></br>
            <button className='btn btn-primary'>Submit</button>
            <strong>{errorr}</strong>
        </form>
    </div>
  )
}

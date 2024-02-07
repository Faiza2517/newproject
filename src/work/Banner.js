import React from 'react'
import  './style.css';
import{imager} from '../asset'
import { Card } from './Card';
import { From } from './From';



export const Banner = () => {
  return (
    //start artical data
    <div class="top-bannar p-100">
    <div className='container'>
    <div class="row">
      <div class=" col-lg-6  mt-5">
        <h1>Artical For</h1>
        <h1 style={{color:'green'}}>Front-end devs</h1>
        <p>Artical on web performance,responsive<br></br>
          web design and more</p>  
     </div>
            <div class= " col-lg-6">
               <img src={imager} style={{height:'300px', width:'500px'}}/>
           </div>
    </div>
    </div>

    <Card/>
   </div>
  )
}

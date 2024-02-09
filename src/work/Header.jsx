import React from 'react'
import  './style.css';
import { NavLink } from 'react-router-dom'
import{img} from '../asset'

export const Header = () => {
  return (
    //start navbar
<div> 
<section className='Navbar-section'>
<nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a href='/'><img className='logo' src={img}  /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href='/'>Work
                <i class="fa fa-shopping-bag" aria-hidden="true"/></a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Services
                <i class="fa fa-coffee" aria-hidden="true"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About
                <i class="fa fa-heart" aria-hidden="true"/></a>
              </li>

            </ul>
            <div class='d-flex ' style={{marginLeft:850}}>
           <strong>blog<i class="fa-solid fa-message"></i></strong>
            <button style={{ backgroundColor: 'green', borderRadius: '13px', color: 'white', marginLeft: 20 }}>Planner<i class="fa-solid fa-leaf" style={{marginLeft:6}} aria-hidden="true"></i></button>
          </div> 
                    </div>
                </div>
            </nav>
        </section>


       
</div>
  )
}



        







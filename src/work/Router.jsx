import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Work } from './Work'
import { About } from './About'
import { Services } from './Services'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Work/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
    </Routes>
  )
}

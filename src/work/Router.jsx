import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Task2 } from "./Task2";
import { Task } from "./Task";


export const  Routers= () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='task' element={<Task />} />
            <Route path='task2' element={<Task2 />} />
        </Routes>
    )
}




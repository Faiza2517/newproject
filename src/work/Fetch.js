import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

export const Fetch = () => {
    const [data, setData]= useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.error('fetch error' , error)
        });
        
    }, []);
  return (
    <div><h1>fetch</h1>
    <table >
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {data.map((blog) =>{
                return(
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.body}</td>
                        <td>{blog.body}</td>

                    </tr>
                )
            })}

        </tbody>

    </table>
    </div>
  )
}

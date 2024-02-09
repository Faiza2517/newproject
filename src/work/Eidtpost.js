import { green } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Eidtpost = () => {
    const [loading, setloading] = useState(true)
    const [inputedit, setinputedit] = useState(false)
    const [eidtpost, seteditpost] = useState({ title: '', body: '', userId: '', id: '' });

    const { id } = useParams();

    const editdata = (id) => {
        //get data API 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const postData=response.data;
                seteditpost(postData)
                setloading(false)
                
            })
            .catch((error) => {
                console.error('finding error', error)
            })
    }
    //use navigate function
    const Navigate = useNavigate()
    //handle back button icon
    const handleBack = () => {
        Navigate(-1);
    }

    useEffect(() => {
        editdata(id)
    }, [])
    //edit post
    const handleEditPost = () => {
        setinputedit(!inputedit)
    }
    //input convert edit
    const handleConvertInput = (e) => {
        const { name, value } = e.target;
        seteditpost((prevoiusdata) => ({
            ...prevoiusdata,
            [name]: value,
        }))
    }
    // save edit data
    const handleSave = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, eidtpost)
        .then((response) => {
          console.log('Post updated successfully:', response.data);
          // Update the post in the local state
          setinputedit(false); // Exit edit mode
          // You don't need to do anything with useParams(id) here, 
          // as you're already updating the post with the correct id.
        })
        .catch((error) => {
          console.error('Error updating post:', error);
        });
    }
    if (loading) {
        return (
            <div class='d-flex justify-content-center'>
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )

    }

    return (
        <div className='container'>
            <div style={{marginBottom:10}}>
            <button className='btn btn-success' onClick={handleBack}>
            <i class="fa-solid fa-arrow-left"></i>
            </button>
            </div>
            <div className='container card'>

                <div>
                    {inputedit ? (
                        //if condition save data
                        <>
                            <div>
                                <label className='form-label'>Title</label>
                                <input type='text'
                                    className='form-control'
                                    name='title'
                                    id='editedtitle'
                                    value={eidtpost.title}
                                    onChange={handleConvertInput}></input>
                            </div>
                            <div>
                                Body <input type='text'
                                    className='form-control'
                                    name='body'
                                    id='editedbody'
                                    value={eidtpost.body}
                                    onChange={handleConvertInput}></input>
                            </div>
                            <div>
                                Userid<input type='text'
                                    className='form-control'
                                    name='userId'
                                    id='editeduserId'
                                    value={eidtpost.userId}
                                    onChange={handleConvertInput}></input>
                            </div>
                            <div>
                                Id<input type='text'
                                    className='form-control'
                                    name='id'
                                    id='editedid'
                                    value={eidtpost.id}
                                    onChange={handleConvertInput}
                                    onKeyPress={(e) => {
                                        // Allow only numeric input
                                        const charCode = e.charCode;
                                        if (charCode !== 8 && charCode !== 0 && (charCode < 48 || charCode > 57)) {
                                          e.preventDefault();
                                        }
                                      }}></input>
                            </div>
                            <button className='btn btn-danger' onClick={handleSave}>save</button>
                        </>

                    )

                        //else condition editpost data
                        // {/* Display fetched data */}
                        : (
                            <div>
                                <h2>Title</h2>
                                <p>{eidtpost.title}</p>
                                <p><h3>Body</h3>{eidtpost.body}</p>
                                <p><h3>Userid</h3>{eidtpost.userId}</p>
                                <p><h3>Id</h3>{eidtpost.id}</p>
                                <button className='btn btn-info' onClick={() => handleEditPost(true)}>Editpost</button>
                            </div>

                        )}
                </div>
            </div>
        </div>
    )
}


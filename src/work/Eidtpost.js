import { green } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Eidtpost = () => {
    const [loading, setloading] = useState(true)
    const [datasave, setSavedata] = useState(null)
    const [inputedit, setinputedit] = useState(false)
    const [eidtpost, seteditpost] = useState({ title: '', body: '', userId: '', id: '' });

    const { id } = useParams();

    const editdata = (id) => {
        //get data API 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setSavedata(response.data);
                setloading(false)
                seteditpost({
                    title: response.data.title,
                    body: response.data.body,
                    userId: response.data.userId,
                    id: response.data.id,

                })
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
        setSavedata(eidtpost);
        setinputedit(false);
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
                                    onChange={handleConvertInput}></input>
                            </div>
                            <button className='btn btn-danger' onClick={handleSave}>save</button>
                        </>

                    )

                        //else condition editpost data
                        : (
                            <div>
                                <strong>{datasave?.title}</strong>
                                <p>{datasave?.body}</p>
                                <p>{datasave?.userId}</p>
                                <p>{datasave?.id}</p>
                                <button className='btn btn-info' onClick={handleEditPost}>Editpost</button>
                            </div>

                        )}
                </div>
            </div>
        </div>
    )
}

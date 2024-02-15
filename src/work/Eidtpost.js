import { green } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Eidtpost = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [eidtpost, setEditpost] = useState({ title: '', body: '', userId: '', id: '' });


    const { id } = useParams();

    const editdata = (id) => {
        //get data API 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const postData = response.data;
                setEditpost(postData)
                setLoading(false)

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

    //input convert edit
    const handleConvertInput = (e) => {
        const { name, value } = e.target;
        setEditpost((prevoiusdata) => ({
            ...prevoiusdata,
            [name]: value,
        }))
    }
    // save edit data
    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        // Validation
        if (eidtpost.title.trim().length === 0 || eidtpost.title.trim().length <= 3) {
            setError('Title should be more than three characters');
            setLoading(false);
            return;
        }
        else if (eidtpost.body.trim().length === 0 || eidtpost.body.trim().length <=3) {
            setError('Body should contain maximum three charcter');
            setLoading(false);
            return;
        }
        else if (eidtpost.body.trim().length === 0 || eidtpost.body.trim().length >= 500) {
            setError('Body should contain maximum 500 characters');
            setLoading(false);
            return;
        }
       
        else if (eidtpost.userId.length === 0) {
            setError('userid should contain be empty');
            setLoading(false);
            return;
        }
        else if (eidtpost.userId < 0) {
            setError(' userid should contain only numeric value');
            setLoading(false);
            return;
        }
        else if (eidtpost.id.length === 0) {
            setError('id should contain be empty');
            setLoading(false);
            return;
        }
        else if (eidtpost.id < 0) {
            setError('id should contain only numeric value');
            setLoading(false);
            return;
        }
        else {
            setError('submit success');
        }
        //validation end

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,eidtpost)
            .then((response) => {
                console.log('Post updated successfully:', response.data);
                setLoading(false);
                // Update the post in the local state
                // You don't need to do anything with useParams(id) here, 
                Navigate('/');
                
            })
            .catch((error) => {
                console.error('Error updating post:', error);
                setLoading(false);
            });
    }

    return (
        <div className='container'>
            <div style={{ marginBottom: 10 }}>
                <button className='btn btn-success' onClick={handleBack}>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <div className='container card'>
            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
                <div>
                    <label className='form-label'>Title</label>
                    <input type='text'
                        className='form-control'
                        name='title'
                        id='editedtitle'
                        value={eidtpost.title}
                        onChange={handleConvertInput}
                        ></input>
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
                        onChange={handleConvertInput}
                        onKeyDown={(e)=> e.key === 'e' && e.preventDefault()}// prevent 'e'
                        ></input>
                </div>
                <div>
                    Id<input type='text'
                        className='form-control'
                        name='id'
                        id='editedid'
                        value={eidtpost.id}
                        onChange={handleConvertInput}
                        onKeyDown={(e)=> e.key === 'e' && e.preventDefault()} // prevent 'e'
                        ></input>
                </div>
                <div style={{marginTop:10}}>
                <button className='btn btn-danger'  onClick={handleSave}>save</button>
                </div>
                <p>{error}</p>
                 {/* {Load && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> 
            )}  */}
            </div>
            
        </div>
    )
}


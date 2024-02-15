import React, { useState } from 'react'
import axios from 'axios'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const From = () => {
    const [loading, setloading] = useState()
    const [formdata, setPost] = useState({ title: '', body: '', userId: '' })
    const [errorr, seterrorr] = useState('')
    const [submitdata, setsubmitdata] = useState(null)


    const handleInput = (e) => {
        setPost({ ...formdata, [e.target.name]: e.target.value })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Start loading
        setloading(true);

        // validation start
        if (formdata.title.length === 0) {
            seterrorr('title cannot be empty');
            setloading(false); // Stop loading
            return;
        } else if (formdata.title.length <= 5) {
            seterrorr('title should have more than five characters');
            setloading(false); // Stop loading
            return;
        } else if (formdata.body.length === 0) {
            seterrorr('body cannot be empty');
            setloading(false); // Stop loading
            return;
        } else if (formdata.body.length >= 500) {
            seterrorr('maximum length should be 500 characters');
            setloading(false); // Stop loading
            return;
        }
        else if (formdata.userId.length === 0) {
            seterrorr('boday cannot b empty')
            setloading(false)
            return;
        }
        else if (!/^\d+$/.test(formdata.userId)) {
            seterrorr('userId cannot empty and should contain only numeric value');
            setloading(false); // Stop loading
            return;
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', { ...formdata })
            .then((response) => {
                setsubmitdata(response.data);//set submit data
                seterrorr('submit success');
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setloading(false); // Set loading to false after the request is completed
                e.target.reset();
            });
    }
    const Navigate = useNavigate()

    const handleBack = () => {
        Navigate(-1);

    }


    return (
        <div className='container'>
            <div style={{ marginBottom: 10 }}>
                <button className='btn btn-success' onClick={handleBack}>
                    <i class="fa-solid fa-arrow-left" ></i>
                </button>
            </div>

            <div className='container card'>
                <strong>Add list from API</strong>
                <form onSubmit={handleSubmit}>
                    Title:<input type='text'
                        onChange={handleInput}
                        name='title'
                        required
                        className='form-control'></input><br></br>
                    Post: <textarea
                        required
                        onChange={handleInput}
                        name='body'
                        className='form-control' /><br></br>
                    userId:<input
                        type='number'
                        onChange={handleInput}
                        name='userId'
                        className='form-control'
                        onKeyPress={(e) => {
                            // Allow only numeric input
                            const charCode = e.charCode;
                            if (charCode !== 8 && charCode !== 0 && (charCode < 48 || charCode > 57)) {
                                e.preventDefault();
                            }
                        }}
                    ></input><br></br>
                    <button className='btn btn-primary'>Submit</button>
                    <strong>{errorr}</strong>
                </form>
                {loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
            {submitdata && (
                <div className='container card mt-4'>
                    <strong>Submit data</strong>
                    <p>Title:{submitdata.title}</p>
                    <p>Body:{submitdata.body}</p>
                    <p>Userid:{submitdata.userId}</p>

                </div>
            )}
        </div>
    )
}

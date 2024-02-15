import React, { useState } from 'react'
import axios from 'axios'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const From = () => {
    const [loading, setLoading] = useState()
    const [formdata, setPost] = useState({ title: '', body: '', userId: '' })
    const [errorr, setErrorr] = useState('')
    const [submitdata, setSubmitdata] = useState(null)
    const [count,setCount]=useState(0)



    const handleInput = (e) => {

        const { name, value } = e.target;
        if (name === 'body') {
            setCount(value.length)
        }
        setPost({ ...formdata, [e.target.name]: e.target.value })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Start loading
        setLoading(true);

        // validation start
        if (formdata.title.length === 0) {
            setErrorr('title cannot be empty');
            setLoading(false); // Stop loading
            return;
        } else if (formdata.title.length <= 5) {
            setErrorr('title should have more than five characters');
            setLoading(false); // Stop loading
            return;
        } else if (formdata.body.length === 0) {
            setErrorr('body cannot be empty');
            setLoading(false); // Stop loading
            return;
        }
        else if (formdata.body.length <=3) {
            setErrorr('body chould contain maximum three charcter');
            setLoading(false); // Stop loading
            return;
        }
         else if (formdata.body.length >= 500) {
            setErrorr('maximum length should be 500 characters');
            setLoading(false); // Stop loading
            return;
        }
        else if (formdata.userId.length === 0) {
            setErrorr('userid should can be empty')
            setLoading(false)
            return;
        }
        else if (formdata.userId <0) {
            setErrorr('userId cannot empty and should contain only numeric value');
            setLoading(false); // Stop loading
            return;
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', { ...formdata })
            .then((response) => {
                setSubmitdata(response.data);//set submit data
                setErrorr('submit success');
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false after the request is completed
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

                        className='form-control'></input><br></br>
                    Post: <textarea
                        onChange={handleInput}
                        name='body'
                        className='form-control' />
                        <p>Count Word:{count}/500</p>
                        <br></br>
                    userId:<input
                        type='number'
                        onChange={handleInput}
                        name='userId'
                        className='form-control'
                        onKeyDown={(e)=> e.key === 'e' && e.preventDefault()}// prevent 'e'
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

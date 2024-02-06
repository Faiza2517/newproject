import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Eidtpost = () => {
    const [datasave, setSavedata] = useState(null)
    const [inputedit, setinputedit] = useState(false)
    const [eidtpost, seteditpost] = useState({ title: '', body: '', userId: '', id: '' });

    const { id } = useParams();

    useEffect(() => {
        //get data API 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setSavedata(response.data);
                seteditpost({
                    title: response.data.title,
                    body: response.data.body,
                    userId: response.data.userId,
                    id : response.data.id,
     
                })
            })
            .catch((error) => {
                console.error('finding error', error)
            })
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
    return (
        <div className='container card'>
            
   <div>
    {inputedit ?(
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
    :(
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
    )
}

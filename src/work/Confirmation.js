import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Confirmation = ({ data, Data, setData }) => {
    const [loading, setLoading] = useState(false)
    const [del, setDel] = useState(false)
    //handledelete
    const handledelete = (index) => {
        setLoading(true);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then((response) => {
                console.log("check data", response)
                setLoading(false)
            })
        console.log(index, "check index");

        const update = Data.filter(Data => Data.id !== index)
        setData(update)
        console.log(update);
        //confirmation msg
        setDel(false)
    }
    //handle cancle

    const handleCancle = () => {
        setDel(false)
    }

    //read more usenavigate
    // const navigate = useNavigate()
    // const handleClick = ((Data) => {
    //     if (Data) {
    //         navigate(`/Detail/${Data.id}`, { state: Data })
    //     }
    // })
    //readmore end

    return (

        <>
            <div key={data.id} className="container card p-3">
                <h3>{data.title}</h3>
                <strong>{data.head}</strong>
                <p>{data.body}</p>
                <p>{data.id}</p>
                <p>{data.userId}</p>
                <p><Link to={`/ReadMore/${data.id}`}>Read more</Link></p>

                <div style={{ width: 200, marginRight: 20 }}>
                    <p><Link to={`/editpost/${data.id}`} type="btn"> Edit post</Link></p>
                    <button className="btn-success" onClick={() => setDel(true)}>Delete Post</button>

                </div>
                {del && (
                    <div>
                        <p>Are you sure you want to delete this blog post?</p>
                        <button className="btn-success" onClick={() => handledelete(data.id)}>Yes</button>
                        <button className="btn-success" onClick={handleCancle}>No</button>

                    </div>
                )}
                {loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}



            </div>



        </>
    )

}



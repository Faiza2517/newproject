import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Confirmation } from './Confirmation'
import { Link } from 'react-router-dom'

export const Card = () => {
    const [loading, setloading] = useState(true)
    const [Data, setData] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                setData(response.data)
                setloading(false)
            })
            .catch((error) => {
                console.error('error fatching data', error)
            })
    }, [])
    if (loading) {
        return (
        <div class='d-flex justify-content-between'>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
</div>
        )

    }


    return (
        <>
            <p className='container fluid'>  <Link to={`/form/id`}>Add post</Link></p>

            < div style={{ marginTop: 15 }}>
                {Data.map((data) => {
                    return (
                        <Confirmation data={data} Data={Data} setData={setData} />
                    )
                })}</div>
        </>
    )
}

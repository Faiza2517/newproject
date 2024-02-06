import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Confirmation } from './Confirmation'

export const Card = () => {
    const [Data, setData] = useState([])
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error('error fatching data', error)
            })
    }, [])

    

    return (

        < div style={{marginTop:15}}>
            {Data.map((data) => {
                return(
                    <Confirmation data={data} Data={Data} setData={setData}/>
                )
            })}</div>
    )
}

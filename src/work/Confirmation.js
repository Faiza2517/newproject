import React from 'react'
import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Confirmation = ({data, Data, setData}) => {
    const [del, setDel] = useState(false)
  //handledelete
  const handledelete = (index) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
        .then((response) => {
            console.log("check data", response)
        })
        console.log(index, "check index");

    const update = Data.filter(Data => Data.id !== index)
    setData(update)
    console.log(update);
    //confirmation msg
    setDel(false)
}
//handle cancle

const handleCancle=()=>{
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
       
            <div className='container card' style={{ paddingLeft: 180, paddingRight: 180, padding: 20 }}>
                <strong>{data.id}</strong>
                <p>{data.title}</p>
                <p>{data.body}</p>
                <div style={{ width: 100 }}>
                    { /* usenavigate <button onClick={() => handleClick(data)} >Read More</button> */}
                    <p><Link to={`/ReadMore/${data.id}`}>Read more</Link></p>
                    <p><Link to={`/editpost/${data.id}`}>Editpost</Link></p>
                    <button className='btn btn-primary' onClick={() => setDel(true)}  >Delete</button>
                    
                </div>
                {del && (
                    <div >
                    <p>are you sure delete this post</p>
                    <button className='btn btn-primary' onClick={()=>handledelete(data.id)} style={{margin:8}}>Yes</button>
                    <button className='btn btn-primary' onClick={handleCancle}>No</button>
                    </div>
                )}
            </div>

        </>
)

}


import { Confirmation } from './Confirmation'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

export const Card = () => {
    const [Loading, setLoading] = useState(true);
    const [Start, setStart] = useState(0); // Assuming initial page start index
    const [Limit, setLimit] = useState(10); // Assuming initial page limit
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${Start}&_limit=${Limit}`)
            .then((response) => {
                 setData(prevData => prevData.concat(response.data));//concat prev post 
                //setData(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [Start, Limit]); // Trigger the effect when start or limit changes

    const handleNextpage = () => {
        setStart(Start + Limit);
    };
    
    const handleLimitChange = (e) => {
        setLimit(parseInt(e.target.value));
        setStart(0); // Reset start to fetch data from the beginning when limit changes
    };

    if (Loading) {
        return (
            <div className='d-flex justify-content-between'>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <p className='container fluid'>
                <Link to={`/form/id`}>Add post</Link>
            </p>
            <div style={{ textAlign: 'center', marginTop: 15 }}>
                <select value={Limit} onChange={handleLimitChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select>
</div>
            <div style={{ marginTop: 15 }}>
                {data.map((index) => (
                 
                    <Confirmation index={index} data={data}  setData={setData}/>
                    
                ))}
            </div>

            {/* <div style={{textAlign:'center', marginTop:15}}>
        
                <button className='btn btn-danger' onClick={handleNextpage}>Next</button>
            </div> */}
            <div style={{ textAlign: 'center', marginTop: 15 }}>
                <button className='btn btn-danger' onClick={handleNextpage}>Next</button>
                </div>
               
            </div>

    )
}


    
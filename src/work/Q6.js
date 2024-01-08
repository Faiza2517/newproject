import { useState } from "react";

export const Q6 = () => {
     const [Data, setData] = useState();
    return (
        
        <div style={{margin:10}}>
            <strong>Q6:</strong>
            <br></br>
            <button onClick={() => {setData(Data - 1);}} >Decrement</button>
            
            <input type="number"
            value={Data}
            onChange={(e) =>
             {setData(Number(e.target.value))}}>
            </input>

            <button onClick={() => {setData(Data + 1);}}>Increment</button>
        </div>
        
    );
}

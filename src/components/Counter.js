import {useState} from 'react';

const Counter = ()=>{

    const[count, countInc] = useState(0);

    const addOne = ()=>{
        countInc(count+1);
    }

return(
    <div>
        <h1>{count}</h1>
        <button onClick={addOne}>Add one</button>
    </div>
)
};


export default Counter;

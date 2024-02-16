import React,{useState} from "react";

function Counter1({initialCount}) {
    const [Count,setCount] = useState(initialCount);
    
const increment = () =>{
    setCount(Count + 1);
}

return(
    <>
    <h1>Functional Component</h1>
    <p>Count : {Count}</p>
    <button onClick={increment}>Increment</button>
    </>
)
}

export default Counter1;
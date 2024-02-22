import React,{useState} from "react";

function Counter1({initialCount}) {
    const [count,setCount] = useState(initialCount);

    const increment = () => {
        setCount(count +1);
    }

    return (
        <>
        <h1>Functional Component</h1>
        <p>count : {count}</p>
        <button onClick={increment}>INCREMENT</button>
        </>
    )
}

export default Counter1
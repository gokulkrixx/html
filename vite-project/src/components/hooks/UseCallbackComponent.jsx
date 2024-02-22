import ChildComponent from "./ChildComponents";
import React,{useState, useCallback} from "react";

function UseCallbackComponent() {
    console.log("Parent re-rendering....")
    const [count , setCount] =useState(0);


    const handleClick = useCallback(()=>{
        setCount(count +1);
        // setCount((prevCount) => prevCount +1);
    },[count]);


    return(
        <>
        <h1>Count : {count}</h1>
        <ChildComponent onclick={handleClick}/>
        </>
    )
}

export default UseCallbackComponent;
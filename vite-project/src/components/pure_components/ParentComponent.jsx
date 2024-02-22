import React,{useState} from "react";

const MyPureComponent = React.memo(({message})=>{
    console.log("component re-rendering");
    return <div>{message}</div>;
});

function ParentComponent() {
    const [count,steCount] =useState(1);

    return (
        <>
        <MyPureComponent message={"Hello ,I am a component"}/>
        <p>Count :{count}</p>
        <button  onClick={()=> steCount(count +1)}>Increment</button>
        </>
    )
}

export default ParentComponent;
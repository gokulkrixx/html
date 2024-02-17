//Controlled components are react components where react controls and manages the state of the elements, such as from inputs.The component state and the value of  the input element are tightly linked, and any changes to the input is controlled through React's state management


import React,{useState} from "react";

function Controlled(){
    let[inputValue, setInputValue] = useState('');

    const handlechange = (e) =>{
        setInputValue(e.target.value);
    }

    return(
        <>
        <input type="text" value={inputValue} onChange={handlechange} />
        </>
    )
}

export default Controlled;

//In this functional component, we useState hook to manage the input state. The input value is controlled by React's state, and any changes handled throug the onChange event handler. 
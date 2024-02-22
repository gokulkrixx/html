//Controlled components are  react coponents where react controls and manages the state of the elements ,such as form inputs . the components state and value of the  input  elements are tightly linked , and any change  to the input is controlled through React's state management

import React,{useState} from "react";

function Controlled (){
    let [inputValue, setInputValue] = useState ('');

    const handleChange = (e)=> {
        setInputValue(e.target.value);
    }

    return(
        <>
        <input type="text" value={inputValue} onChange={handleChange}/>
        </>
    )
}

export default Controlled;

//in this function component , we use the usestate hook to manage the input state. the input value is controlled by React's state, and any changes handled through the onChange event handler.
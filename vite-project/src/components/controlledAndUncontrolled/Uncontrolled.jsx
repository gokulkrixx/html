// uncntrolled components are react components where the form elements maintain their own state , and React is not directly involved in managing their state . we can still access their values using refs , but react does not control or manipulat the state of these components 

import React,{useRef} from "react";

function uncontrolled (){
    let inputRef= useRef (null);

    const handleButtonClick = ()=> {
        alert(`input vlue :${inputRef.current.value}`);
    }

    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleButtonClick}>Get input value</button>
        </>
    )
}

export default uncontrolled;

//In the function compontents , we use the useRef hook  to creat a reference to the input element(inputRef) . The input maintains its own state , and whwn the button is clicked , we access the input's value using the ref . React is not directly controlling the input's  value using the ref . React is not directly controlling the input's value in this case
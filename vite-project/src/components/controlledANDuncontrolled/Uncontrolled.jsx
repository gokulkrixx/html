//Uncontrolled components are react components where the form elements maintain their own state, and React is not directiy involved in managing their state. we can still access their values using refs, but react does not control or manipulate the state of these components.




import React, {useRef} from "react";

function Uncontrolled(){
    let inputRef = useRef(null);

    const handleButtonClick = (e) => {
        alert(`Input value : ${inputRef.current.value}`);
    }
    return(
        <>
        <input  type="text" ref={inputRef}/>
        <button onClick={handleButtonClick}>Get input  value</button>
        </>
    )
}

export default Uncontrolled;


// In this functional component, we use  the uesRefer hook to create a reference to the input element (inputRef). The input maintains its own state, *when the button is clicked, we access the input's value using the ref. React is not directly controlling the input's value in this case.
 
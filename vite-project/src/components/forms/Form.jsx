import React,{useState} from "react";

function Form({onSubmit}) {

    console.log("Form component rendering");

    const  [inputData , setInptData] = useState({
        name : '',
        email : '',
    });

    const handleChange =(e) => {
        e.preventDefault();
        // setInptData(e.target.value);

        if(e.target.name ==="name") {
            setInptData({
                ...inputData,
                name :e.target.value,
            })
        }

        if (e.target.name ==="email") {
            setInptData({
                ...inputData,
                email :e.target.value,
            })
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit(inputData);
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange}/>
            <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}

export default Form;
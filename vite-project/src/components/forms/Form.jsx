import React,{useState} from "react";

function Form({onSubmit}) { 


    const [inputData, setInputData] = useState({
        name : '',
        email : '',
    });
 
    
    const handlechange = (e) => {
        e.preventDefault();
    //     setInputData(e.target.value);

    if(e.target.name === "name"){
        setInputData({
            ...inputData,
            name: e.target.value,
        })
    }

    if (e.target.name === "email"){
        setInputData({
            ...inputData,
            email : e.target.value,
        })
    }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(inputData);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type ="text" name="name" id="name" placeholder ="Enter your name" onChange={handlechange}/>
            <input type = "text" name="email" id="email" placeholder="Enter your name" onChange={handlechange}/>
            <input type ="submit" value="submit"/>
        </form>
        </>
    )
}

export default Form;
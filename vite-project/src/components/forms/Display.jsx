import React from "react";

function Display({displayData}) {

    console.log("Display component rendering");

    return (

        <>
        <h1>Name : {displayData.name} </h1>
        <h1>Email: {displayData.email}</h1>
        </>
        
    )
}

export default Display;
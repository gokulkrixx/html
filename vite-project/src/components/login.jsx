import React,{useState} from "react";

function  Login (){
    let [isLoggedIn, setIsLoggedIn] = useState(true);
    let content;

    const LogInButton = ()=>{
    setIsLoggedIn(true)
    }

    const LogOutButton = ()=>{
        setIsLoggedIn(false)
    }

    return(
        <>
        {isLoggedIn?(<div>Welcome, you are logged in </div>) :(<div>plzz login</div>)}

        <button onClick={LogInButton}>Login</button>
        <button onClick={LogOutButton}>Out</button>

        </>
    )
}

export default Login;
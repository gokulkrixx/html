import React,{useState} from "react";

// function Login() {
//     let [isLoggedIn,setIsLoggedIn] = useState(false);
//     let content;

//     if(isLoggedIn) {
//         content =<div>Welcome ,you are logged in </div>
//     }else{
//         content =<div>please login</div>
//     }

//     return (
//         <>
//         {content}
//         </>
//     )
// }

function Login() {
    let [isLoggedIn,setIsLoggedIn] = useState(true);
    let content;

    const Loginbut =()=> {
        setIsLoggedIn(true)
    }

    const Logoutbut =()=> {
        setIsLoggedIn(false)
    }


    return (
        <>
        {isLoggedIn?(<div>Welcome, you are Logged in</div>):(<div>Please Login</div>)}

        <button onClick={Loginbut}>Login</button> <button onClick={Logoutbut}>logout</button>
        </>
    )
}

export default Login;
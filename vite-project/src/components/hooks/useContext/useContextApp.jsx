import React,{createContext,useContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

//Create a context with a default value
export const MyContext = createContext('default');



function UseContextApp(){
    //Provide the context value to the tree
    return(
        <MyContext.Provider value="hello from Context">
         <ComponentA/>
         <ComponentB/>
        </MyContext.Provider>
    )
}


export default UseContextApp;
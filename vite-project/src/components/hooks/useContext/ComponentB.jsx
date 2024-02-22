import {useContext} from "react";
import { MyContext } from "./useContextApp";



function ComponentB(){

    const contextValue = useContext(MyContext);

    return <div>component B : {contextValue}</div>
}

export default ComponentB;

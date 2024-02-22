import { useParams } from "react-router-dom";

function About(){

    let {name}=useParams();

    return <h1>ABOUT {name}</h1>
}

export default About;
import {Link} from "react-router-dom";

function Nav () {
    return (
        <>
        <nav>
            <ul>
                <li><Link to={'/home'} >Home</Link></li>
                <li><Link to={'/about/Aswin'} >About</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;
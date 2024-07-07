import {Link} from  "react-router-dom"

function Navbar()   {

    return (
        <>
        <nav>
            <ul className="nav-bar">
                <li><Link to = "/home">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/skills">Skills</Link></li>

            </ul>
        </nav>
        </>
    )
}

export default Navbar;
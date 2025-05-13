import { Link } from "react-router-dom"
export default function Layout () 
{
    return(
        <>
            <h1>My Portfolio </h1>
            <nav> 
            <Link to="/">Home </Link>| <Link to="/about">About </Link>|<Link to="/service">Service</Link>|<Link to="/projects">Projects </Link>|<Link to="/contacts">Contacts </Link>
            </nav>
        </>

    )
}
import { Link } from "react-router-dom"
import Logo from "./Logo"
export default function Layout () 
{
    return(
        <>
            <header style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                <Logo/>
                <h1>My Portfolio </h1>
            </header>
            
            <nav> 
            <Link to="/">Home </Link>| <Link to="/about">About </Link>|<Link to="/service">Service</Link>|<Link to="/projects">Projects </Link>|<Link to="/contacts">Contacts </Link>
            </nav>
        </>

    )
}
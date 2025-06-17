/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { Link } from "react-router-dom"
import Logo from "./Logo"
export default function Layout () 
{
    return(
        <>
            <header className="main-header">
                <Logo/>
                <h1 className="site-title">My Portfolio </h1>
            </header>
            
            <nav> 
            <Link to="/">Home </Link>| <Link to="/about">About </Link>|<Link to="/service">Service</Link>|<Link to="/projects">Projects </Link>|<Link to="/contacts">Contacts </Link>|<Link to="/experience">Experience</Link>
            </nav>
        </>

    )
}
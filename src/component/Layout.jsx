/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { Link,Outlet } from "react-router-dom"
import Logo from "./Logo"
import MainHeader from "./MainHeader"

export default function Layout () 
{
    return(
        <>
        <MainHeader/>
           
            
            <nav> 
            <Link to="/">Home </Link>| <Link to="/about">About </Link>|<Link to="/service">Service</Link>|<Link to="/projects">Projects </Link>|<Link to="/contacts">Contacts </Link>|<Link to="/experience">Experience</Link>
            </nav>
            <main><Outlet /></main>
        </>

    )
}
/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { Link,Outlet } from "react-router-dom"
import Logo from "./Logo"


export default function Layout () 
{
    
    return(
        <>
        <header className="main-header">
            <div className="logo-title">
                <Logo />
                <h1 className="site-title">My Portfolio</h1>
                </div>
            <div className="tech-background">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                
                
                    </header>

       
            <nav> 
                <ul   className="nav-links">
                     <li><Link to="/">Home </Link></li>
                      <li><Link to="/about">About </Link></li>
                      <li><Link to="/service">Service</Link></li>
                      <li><Link to="/projects">Projects </Link></li>
                      <li><Link to="/contacts">Contacts </Link></li>
                      <li><Link to="/experience">Experience</Link></li>
                     </ul>
                     </nav>
                     
            <main><Outlet /></main>
        </>

    )
}
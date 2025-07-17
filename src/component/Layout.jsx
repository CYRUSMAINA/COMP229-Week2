/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { Link } from "react-router-dom"
import Logo from "./Logo"
export default function Layout ({user,onLogout}) 
{
    return(
        <>
            <header style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                <Logo/>
                <h1>My Portfolio </h1>
            </header>
            
            <nav style={{display:'flex',alignItems:'center',gap:'1rem'}}> 
            <div>
            <Link to="/">Home </Link>| <Link to="/about">About </Link>|<Link to="/service">Service</Link>|<Link to="/projects">Projects </Link>|<Link to="/contacts">Contacts </Link>
            </div> 
            <div>
             {user ? (
                <>
                <span style={{ marginRight: '10px' }}>Welcome, {user.username}</span>
                <button onClick={onLogout}>Logout</button>
                </>
                ) : (
                <>
                <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
                <Link to="/login">Login</Link>
                </>
            )}
            </div>          
            </nav>
        </>

    )
}
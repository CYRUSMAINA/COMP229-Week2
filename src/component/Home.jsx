/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { Link } from "react-router-dom"

export default function Home()
{
     return(
        <div className="home-container">
            
            <h1>Welcome To My Portfolio.</h1>
            <p>This site showcases my skills,projects and experience. </p>
            <h3>Mission statement</h3>
            <p>Mission:To grow as full stack developer by continues learning and creating great apps</p>

            <div  style={{margin:'1rem'}}>
                <Link to="/about">
                <button>Learn more about me</button>
                 </Link>
            </div>
        </div>
        
     )
}
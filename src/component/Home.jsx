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
        <>
        
        <div className="home-container">
            {/*Hero Corner*/}
            <h1>Hey there,I am Cyrus Maina.</h1>
            <h2>Welcome to my portfolio</h2>
            <p>This site showcases my skills,projects and experience. </p>
            <section style={{marginTop:'2rem',marginBottom:'2rem'}}>
            <h3>Mission statement</h3>
            <p>My mission is to grow as full stack developer by continues learning 
                and creating great apps</p>
            </section>
            <div  style={{marginTop:'2rem'}}>
                <Link to="/about">
                <button className="cta-button">Learn more about me</button>
                 </Link>
            </div>
        </div>
        </>
     )
}
/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default function Service()

{
   
     return(
      <div className="service-container">
         <h1>My Services</h1>
         <p>Lets learn new things and build amazing projects!</p>
         {/*Links to each service*/}
         <div>
            <h2>Explore My Service</h2>
            <ul>
               <li><Link to="/service/web-development">Web Development</Link></li>
               <li><Link to="/service/mobile-application">Moble Application</Link></li>
               <li><Link to="/service/general-programming">General Programming</Link></li>
            </ul>
         </div>
         {/* List of services with icon*/}
         <div style={{display:"flex", marginTop:"20px",gap:"20px"}}>
            <div style={{textAlign:"center",width:"150px"}}>
               <FontAwesomeIcon icon={faLaptopCode} size="3x" style={{marginBottom:"10px"}}/>
               <h3>Web Development</h3>
               <p>Building modern websites that's are also responsive </p>

            </div>
            <div style={{textAlign:"center",width:"150px"}}>
               <FontAwesomeIcon icon={faMobileAlt} size="3x" style={{marginBottom:"10px"}}/>
               <h3>Mobile Application</h3>
               <p>Creating Android applications </p>

            </div>
            <div style={{textAlign:"center",width:"150px"}}>
               <FontAwesomeIcon icon={faCode} size="3x" style={{marginBottom:"10px"}}/>
               <h3>General Programming</h3>
               <p>Programming solution for variouse needs </p>

            </div>

         </div>
         
        
      </div>
        
     )
}
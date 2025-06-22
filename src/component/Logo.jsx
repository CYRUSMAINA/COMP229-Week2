/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/


export default function Logo()
{
     return(
      <div className="logo-box">
         

          <svg 
          className="testTeal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          >
               <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="4"/>

               <text
               x="70" 
               y="75" 
               textAnchor="middle" 
               fontSize="20" 
               fill="black" 
               fontWeight="bold"
               fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
               > CM </text>


               <path  
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15 50h15l10-15 10 30 10-20 10 10h15"
               stroke="black"
               strokeWidth="2"
               fill="none"/>

          </svg>
      
       </div>
       
     )
}
import profilePic from "./assets/Profile.jpg"
export default function About()
{
     return(
      <div style={{padding:'1rem',maxWidth:'600px',margin:'auto'}}>
         <h1>About Me</h1>
         <img 
         src={profilePic}
         alt="Profile of Cyrus Maina"
         style={{width:'150px',borderRadius:'8px',marginBottom:'1rem'}}

         />
         <h2>Cyrus Ciira Maina</h2>
         <p> I am a personate student, dedicated to develop my  web application skills in react,javascript  and full stack development.Aims at creating a user friendly web.</p>
         </div>
       
     )
}
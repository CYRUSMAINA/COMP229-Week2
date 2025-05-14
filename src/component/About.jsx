import Profile from "../assets/Profile.jpg";
export default function About()
{
     return(
      <div style={{padding:'1rem',maxWidth:'600px',margin:'auto'}}>
         <h1>About Me</h1>
         <img 
         src={Profile}
         alt="Profile of Cyrus Maina"
         style={{width:'150px',borderRadius:'8px',marginBottom:'1rem'}}

         />
         <h2>Cyrus Ciira Maina</h2>
         <p> I am a passonate student, dedicated to developing my  web application skills in React,Javascript  and full stack development.I aim to create a clean and user-friendly web experiences.</p>
         </div>
       
     )
}
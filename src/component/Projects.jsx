/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

export default function Projects()
{
     return(
      <div className="projects-container">
          <h1>Projects</h1>
          {/*-----------------------project 1---------------------------*/}
          <div className="project">
            <img src="react.svg" alt="React Portfolio" width="300" />
            <h2>React Portfolio</h2>
            <p><strong>Role:</strong>Developer</p>
            <p>This portfolio was build using React to showcase my work and skills.It has 5 pages, Home,About,Projects,Service and contacts.</p>
          </div>
          {/*------------------------project 2---------------------------*/}
          <div className="project">
            <img src="Integration.jpg" alt="Enterprise System Integration App" width="300" />
            <h2>Enterprise System Integration App</h2>
            <p><strong>Role:</strong>Full-stack Developer</p>
            <p>This app was  to showcase the benefit of integrating departments information for effective communication and time saving.</p>
          </div>
          {/*-------------------------project 2-------------------------*/}
          <div className="project">
            <img src="IntegratedProject.jpg" alt="LibMan Digital Library Management System" width="300" />
            <h2>LibMan Digital Library Management System</h2>
            <p><strong>Role:</strong>Full-stack Developer</p>
            <p>This app was to upgrade  Library system from manual system to digital system by integrating both system.</p>
          </div>
          
      </div>
       
     )
}
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
            <h2>My Portfolio</h2>
            <p><strong>Role:</strong>Developer</p>
            <p>This portfolio was build using React to showcase my work and skills.
              It has 5 pages, Home,About,Projects,Service and contacts.</p>
              <div className="project-links">
                <a href="https://github.com/CYRUSMAINA/COMP229-Week2.git" target="_blank" rel="noopener noreferrer" className="project-button">
                View Code 
                </a>
              </div>
          </div>
          {/*------------------------project 2---------------------------*/}
           <div className="project">
        <h2>SimpleEMR</h2>
        <p><strong>Technologies:</strong> C#, Oracle SQL</p>
        <p>
          Developed a simplified Electronic Medical Records (EMR) system to manage patient data, appointments, and medical history with secure access controls.
        </p>
        <div className="project-links">
          <a href="https://github.com/CYRUSMAINA/SimpleEMR_C-sharp_n_SQL.git" target="_blank" rel="noopener noreferrer" className="project-button">
            View Code
          </a>
        </div>
      </div>
{/*----------------project 3-------------------------*/}
     <div className="project">
        <h2>Online Bookstore Database System</h2>
        <p><strong>Technologies:</strong> SQL, Advanced Database Concepts</p>
        <p>
          Designed and implemented a comprehensive database system for an online bookstore, including inventory management, customer orders, and sales reporting.
        </p>
        <div className="project-links">
          <a href="https://github.com/CYRUSMAINA" target="_blank" rel="noopener noreferrer" className="project-button">
            View Code
          </a>
          
        </div>

    </div>

  </div>
       
     );
}
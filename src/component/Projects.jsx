export default function Projects()
{
     return(
      <div>
          <h1>Projects</h1>
          {/*project 1*/}
          <div className="project">
            <img src="react.svg" alt="React Portfolio" width="300" />
            <h2>React Portfolio</h2>
            <p><strong>Role:</strong>Developer</p>
            <p>This portfolio was build using React to showcase my work and skills.It has 5 pages, Home,About,Projects,Service and contacts.</p>
          </div>
          {/*project 2*/}
          <div className="project">
            <img src="EnterpriseSystemIntegratio.jpg" alt="React Portfolio" width="300" />
            <h2>React Portfolio</h2>
            <p><strong>Role:</strong>Developer</p>
            <p>This portfolio was build using React to showcase my work and skills.It has 5 pages, Home,About,Projects,Service and contacts.</p>
          </div>
          
      </div>
       
     )
}
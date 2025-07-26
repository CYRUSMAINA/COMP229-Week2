import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import Experience from './component/Experience';
import { useState,useEffect} from 'react';


function App(){  
    const getUserFromStorage = () => {
        const token = localStorage.getItem("token");
        const username =localStorage.getItem("username");
        return token && username ? {username}:null;
};

const[user,setUser] = useState(getUserFromStorage());

useEffect(() =>{
    setUser(getUserFromStorage());
},[]);

const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setUser(null);
}

  return (
    <>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">My Portfolio</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/service">Service</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/projects">Projects</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/contacts">Contacts</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/experience">Experience</Link></li>
                </ul>
                <ul className='navbar-nav ml-auto'>
                {user ? (
                  <>
                    <li className='nav-item d-flex align-items-center'>
                        <span className='navbar-text me-3'>Hello, {user.username}</span>
                        <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                        </li>
                  </>
                ) : (
                  <>
                    <li className='nav-item'><Link className='nav-link' to="/register">Register</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/login">Login</Link></li>
                  </>
                )}
              </ul>
            </div>
          </nav>

          <div className="container mt-4">
    <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="experience" element={<Experience />} />

        
        <Route
          path="register"
          element={
            <div style={{ padding: "2rem" }}>
              <h2>Register</h2>
              <form>
                <input placeholder="Username" className="form-control mb-2" />
                <input type="email" placeholder="Email" className="form-control mb-2" />
                <input type="password" placeholder="Password" className="form-control mb-2" />
                <button className="btn btn-primary">Register</button>
              </form>
            </div>
          }
        />

        <Route
          path="login"
          element={
            <div style={{ padding: "2rem" }}>
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Email" className="form-control mb-2" />
                <input type="password" placeholder="Password" className="form-control mb-2" />
                <button className="btn btn-success">Login</button>
              </form>
            </div>
          }
        />
      </Routes>
     </div>
    </div>
   </Router>
   </>
  );
};

export default App;
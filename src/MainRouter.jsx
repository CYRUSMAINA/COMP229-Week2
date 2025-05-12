import { Routes,Route } from "react-router-dom"
import Layout from "./component/Layout"

const MainRouter = () => 
    {
       return(
        <div>
             <Layout/>
            <Routes>
                <Route path ="/" element = {<h1>Home</h1>}/>
                <Route path ="/about" element = {<h1>About</h1>}/>
                <Route path ="/education" element = {<h1>Education</h1>}/>
                <Route path ="/projects" element = {<h1>Projects</h1>}/>
                <Route path ="/contacts" element = {<h1>Contacts</h1>}/>
            </Routes>
        </div>
       )
    } 
    export default MainRouter
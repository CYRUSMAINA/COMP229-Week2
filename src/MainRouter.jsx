import { Routes,Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import About from "./component/About"
import Service from "./component/Service"
import Projects from "./component/Projects"
import Contacts from "./component/Contacts"

const MainRouter = () => 
    {
       return(
        <div>
             <Layout/>
            <Routes>
                <Route path ="/" element = {<Home/>}/>
                <Route path ="/about" element = {<About/>}/>
                <Route path ="/service" element = {<Service/>}/>
                <Route path ="/projects" element = {<Projects/>}/>
                <Route path ="/contacts" element = {<Contacts/>}/>
            </Routes>
        </div>
       )
    } 
    export default MainRouter
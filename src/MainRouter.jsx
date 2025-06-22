/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/



import { Routes,Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import About from "./component/About"
import Service from "./component/Service"
import Projects from "./component/Projects"
import Contacts from "./component/Contacts"
import Experience from "./component/Experience"

const MainRouter = () => 
    {
       return(
        <div>
             <Layout/>
            <Routes>
                <Route path ="/" element = {<Layout/>}>
                <Route index element={<Home />} />
                <Route path ="/about" element = {<About/>}/>
                <Route path ="/service" element = {<Service/>}/>
                <Route path ="/projects" element = {<Projects/>}/>
                <Route path ="/contacts" element = {<Contacts/>}/>
                <Route path="experience" element={<Experience />} />
                </Route>
            
            </Routes>
        </div>
       )
    } 
    export default MainRouter
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

const MainRouter = ({user,onLogout}) => 
    {
       return(
        <div>
             <Layout  user={user} onLogout={onLogout}/>
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
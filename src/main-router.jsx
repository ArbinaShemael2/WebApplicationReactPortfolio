import {Route,Routes} from 'react-router-dom';
import HomePage from './components/home.jsx';
import AboutPage from './components/About.jsx';
import ProjectsPage from './components/Projects.jsx';
import ServicePage from './components/Service.jsx';
import ContactPage from './components/Contact.jsx';
import Layouts from './components/layouts.jsx';




const MainRouter=() =>{
    return (

        <div>
            <Layouts />
           
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/services" element={<ServicePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        </div>
    )
}

export default MainRouter;
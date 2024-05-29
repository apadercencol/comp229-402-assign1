import {Route, Routes} from 'react-router-dom';
import HomePage from './components/home.jsx';
import AboutPage from './components/about.jsx';
import ProjectPage from './components/projects.jsx';
import ServicePage from './components/service.jsx';
import ContactPage from './components/contact.jsx';

import Layout from './components/layout.jsx';


const MainRouter = () => {
    return (
        
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default MainRouter;
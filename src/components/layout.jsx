/*
Assignment1
Allen Pader
300593768
05/20/24
*/
import {Link} from 'react-router-dom'
import logobanner from '../assets/AllenLogo.png';
export default function Layout(){
    return (
        <>        
            <img src={logobanner} alt="Logo Banner" className="logo" />
            <h1>Portfolio</h1>
            <nav className="nav-buttons">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About me</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/service" className="nav-link">Services</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
            <hr />
        </>
    )
}
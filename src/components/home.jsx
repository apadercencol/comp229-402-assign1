import { Link } from 'react-router-dom';
export default function HomePage(){
    return (
        <div>
        <h2> <u>Home</u> </h2>
        <p>Welcome! This is Allen's Page. Here you will learn more about me, what projects I completed, services I provide, and how to reach me. Enjoy!</p>
        <h2>Mission Statement</h2>
        <p>     As a dedicated software engineering student at Centennial College, my mission is to harness the power of technology to create innovative, reliable, and user-centric software solutions. I am committed to continuous learning, embracing new challenges, and collaborating with diverse teams to drive technological advancements. My goal is to contribute to the software engineering field with integrity, creativity, and a passion for excellence, 
            ensuring that my work not only meets the current demands but also anticipates and shapes the future of the industry.</p>
            <p><b>To know more about me, click here.</b></p>
            <Link to="/about">
                <button>About Me</button>
            </Link>
            <p><b>To see the projects I've worked on, click here.</b></p>
            <Link to="/projects">
                <button>Projects</button>
            </Link>
            <p><b>To see the services I provide, click here.</b></p>
            <Link to="/service">
                <button>Services</button>
            </Link>
            <p><b>To contact me, click here.</b></p>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </div>
    )
}
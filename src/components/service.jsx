
/*
Assignment1
Allen Pader
300593768
05/20/24
*/
import javaexample from '../assets/javaexample.png';
import pythonexample from '../assets/pythonexample.png';
import kotlinexample from '../assets/kotlinexample.png';
import './service.css'; 

export default function ServicePage() {
    return (
        
        <div className="servicePageContainer">
            <h2><u>Services Allen</u></h2>
            <div className="imageContainer">
                <a href={pythonexample} target="_blank" rel="noopener noreferrer">
                    <img src={pythonexample} alt="Python example" className="serviceImage" />
                </a>
                <a href={javaexample} target="_blank" rel="noopener noreferrer">
                    <img src={javaexample} alt="Java example" className="serviceImage" />
                </a>
                <a href={kotlinexample} target="_blank" rel="noopener noreferrer">
                    <img src={kotlinexample} alt="Kotlin example" className="serviceImage" />
                </a>
            </div>
            <h4><b><i>Click on image to enlarge</i></b></h4>
            <p>
                I offer a wide range of services tailored to meet your software development needs. 
                My expertise spans basic coding in several programming languages, including C++, C#, 
                Python, Java, Kotlin, and JavaScript. Additionally, I specialize in web design, 
                mobile app development, and database management, ensuring comprehensive solutions for both 
                frontend and backend development. With a strong background in editing Unix code for eBooks, 
                I bring an added layer of proficiency in managing and optimizing digital content. 
                Whether you need a dynamic website, a functional mobile application, or efficient database and SQL management, 
                my skills and experience are geared towards delivering high-quality, 
                reliable results to bring your projects to life.
            </p>
        </div>
    );
}

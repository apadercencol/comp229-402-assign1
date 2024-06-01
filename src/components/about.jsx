/*
Assignment1
Allen Pader
300593768
05/20/24
*/
import hank from '../assets/Hank_Hill.jpg';


export default function AboutPage() {
    return (
        <div>
            <h2><u>About Me</u></h2>
            <img src={hank} alt="project1" className="project-image" />
            <p>
                I'm Allen Pader, a student at Centennial College where I'm currently enrolled in the Software Engineering Technology program.
                As I gear up for my fifth semester in Fall 2024, I reflect on my journey, having previously graduated from Centennial's Aircraft Maintenance Engineering program.
                Driven by a changing industry landscape, I've embraced this transition, fueled by a passion for innovation and adaptability.
                Beyond academia, I immerse myself in the discipline of martial arts, attending Muay Thai classes in my free time and drawing inspiration from previous experiences such as boxing and Tae-Kwon-Do.
                With a diverse skill set and unwavering determination, I eagerly anticipate leveraging my background to thrive in the dynamic realm of technology.
            </p>
            <p>Image source https://melmagazine.com/en-us/story/hank-hill-propane-salesmen</p>

            <p>To view my professional achievements, please click the button below:</p>
            <button onClick={() => window.open('/ResumeAllenPader2024.pdf', '_blank')}>
                View Resume
            </button>
         
        </div>
    );
}

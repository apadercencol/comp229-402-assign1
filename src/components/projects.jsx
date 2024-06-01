import hippophoto from '../assets/HippoGame.png';
import healthphoto from '../assets/HealthApp.png'; // Adjust the path to your actual image file
import reviewphoto from '../assets/InstructorReview.png'; // Adjust the path to your actual image file
import './projects.css'; // Import the CSS file

export default function ProjectPage() {
    return (
        <div>
            <h2><u>Projects</u></h2>
            <h3>House Hippo Game</h3>
            <img src={hippophoto} alt="project1" className="project-image" />
            <p>
                My Hirole in this project was to create a simple Javascript game with the assistance of the intrustor's guide and other sources.
                 I've created a game where you catch as many house hippos as possible. 
                The hippo appears randomly in different areas of the background photo, changing its position every second. 
                Your score, aptly named "Captured," increases by one each time you click on a hippo. 
                With each capture, the hippo gets faster, darting around the background photo at an increasingly rapid pace. 
                Additionally, you can click the "Release" button to restart the game, resetting your score and releasing the hippos, 
                or select the "Reset Speed" button to reset the speed, returning the hippos to their initial, slower pace. 
                The outome of the game was functional, fun, and expected, but not without it's challenges such as finding the correct speed to start off with and 
                how much to increase the speed by when a hippo is captured. 
            </p>


            <h3>Instructor Review Form</h3>
            <img src={reviewphoto} alt="project3" className="project-image" />
            <p>I was tasked to create a comprehensive instructor evaluation form designed to gather detailed feedback from students. 
                 The form I made allows users to easily input the course code, instructor's name, and year. 
                It features a series of thoughtfully crafted questions with radio buttons, 
                enabling users to rate their experience on a scale from "Excellent" to "Not Satisfactory". 
                Additionally, there is a comment box for users to provide extra information and insights. Lastly, 
                the form is equipped with two fully functional buttons for convenience: 
                one to submit the form and another to reset it. The result of the form came out practical and is a solid foundation for web applications
            </p>

            <h3>Health Logger</h3>
            <img src={healthphoto} alt="project2" className="project-image" />
            <p>
                Using Android Studio, my job was to developed a user-friendly health app designed to help users log their workouts effortlessly. 
                The app allows users to input their exercises and features intuitive radio buttons to select the type of workout, 
                ranging from cardio to strength-based routines. 
                It also includes a dropdown list to choose the difficulty level of each exercise, 
                a rating system for users to evaluate their workouts, 
                and a convenient spinner to record the day of the exercise. 
                The outcome of the app, although simple, demonstrates my solid foundation of using Kotlin and Android Studio.
                
            </p>
        </div>
    );
}

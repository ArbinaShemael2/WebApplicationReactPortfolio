import pic1 from '../assets/todo.png';
import pic2 from '../assets/weatherapp.png';
import pic3 from '../assets/database.png';
import './mystyle.css';




export default function ProjectsPage(){
    return (
        <main id="projectM">
        <section id="projects">
            <h1>Projects</h1>
            <div className="project">
                <img src={pic1} alt="Project 1" />
                <h3>To-Do Project</h3>
               <p>A simple <b>To-Do-Application </b> implemented by JavaScript,html for the layout and bootstrap for the 
               design.It was done individually as a side project<br></br>Included features : 
               <ul><li >To do lists with an feature to add date  </li>
               <li >Completed lists</li>
               <li > Working on lists</li></ul>
                </p>
            </div>
            <div className="project">
                <img src={pic2} alt="Project 2" />
                <h3>WeatherApp</h3>
                <p>A simple <b>Weather App</b> implemented in JavaScript which shows the current weather. To do done invidually as a side
                project. <br></br> It should the include features :
                <ul>
                    <li>Current Weather Display </li>
                    <li>Location Detection</li>
                    <li>Forecast Display</li></ul> </p>
            </div>
            <div className="project">
                <img src={pic3} alt="Project 3" />
                <h3>Student Database System</h3>
                <p>A <b>simple student database System</b>which keeps track of all the students enrolled in the school.It would be implemented
                in SQL. <br></br> It should include the features:
                <ul>
                    <li>Student Information which stores the students personal information,academic information and demographics </li>
                    <li>Enrolment Information: Which includes registeration for courses, courses schedules, and enrollement status </li></ul> </p>
            </div>
        </section>
    </main>
    )
}
import alogo from '../assets/pic.jpg';
import './mystyle.css';


export default function AboutPage(){
    return (
        <div id="contentContainer">
        <div id="leftContent">
            <img src={alogo} alt="Example" id='mypic' />
            
        </div>
        <div id="rightContent">
          <h1 id="AH1">My Story </h1>
          <p>Hello! Im Arbina Shemael a dedicated mom of a wonderful 6 month, and a very passionate Software Engineering Student with Artifical 
            Intelligence.Balancing motherhood and academics is no easy feat, 
            but it has taught me resilience, time management, and the importance of pursuing one's dreams.
             My journey into engineering was fueled by a love for problem-solving and a desire to make a meaningful impact in the world.
              When I'm not immersed in my studies or spending quality time with my child, i tutor math and sciences .
               
               </p>
        </div>
    </div>
    )
}
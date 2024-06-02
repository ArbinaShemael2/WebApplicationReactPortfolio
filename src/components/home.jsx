import './mystyle.css';
import Hlogo from '../assets/Welcome.png';


export default function HomePage(){
    return (
    <main>
        <div id='HomeD'>
            <img src={Hlogo} id='HomePic'/>
            
        </div>
        <div id='HomeW'>
        <h1 id="HomeH1">Mission</h1>
        <p id='homeP'> At Arbina's Portfolio our mission is to 
            become a becon of creavity,innovation and professionalism in the engineering field.Through the 
            Portfolio, we aim to showcase not just our work but our dedication to front-end and back-end 
            development, but also our passion for continuous growth and learning. We Strive to create a platform
            that not only highlights our skills and expertise but also serves as an inspiration to others in the industry. 
            Our goal is to connect with like minded individuals and increase our networking portfolio.  </p>
        </div>
    

        
    </main>
    )
}
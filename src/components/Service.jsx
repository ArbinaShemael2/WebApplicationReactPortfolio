import pic1 from '../assets/tutoring.jpg';
import pic2 from '../assets/web developement.jpg';
import './mystyle.css';


import './mystyle.css';
export default function ServicePage(){
    return (
        <main id="mainStyle">
        <h1 id="servicesTitle">Our Services</h1>
        <section id="services">
            <div class="service">
            <img src={pic1} alt="Service 1" />

                <h3 class="service-title">Math and Science Tutoring</h3>
                <p class="service-description">I offer Tutoring in math and Science, I am an experienced tutor with 
                more than 5 years of experience in tutoring. I offer Tutoring for Elementary School students,middle School students and
                high school students. When Tutoring I try to personalize each Students lesson with their unique learning capacities.  </p>
            </div>
            <div class="service">
            <img src={pic2} alt="Service 2" />                
            <h3 class="service-title">Web Developement</h3>
                <p class="service-description">In the near future I want to be able to offer tutoring for Web Developement Courses, and 
                be able to create Awsome full stack developement websites</p>
            </div>
        </section>
    </main>

    )
}
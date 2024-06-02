import { Link } from "react-router-dom";
import './mystyle.css';
import logo from '../assets/logo.png';

export default function() {
    return (
        <>
            <header id="headerStyle">
                <div id="logo-name">
                    <img src={logo} alt="logo" id="logo" />
                    <h1 id="h1Style">Arbina Portfolio</h1>
                </div>
                <nav id="navagationStyle">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <hr />
            </header>
        </>
    );
}

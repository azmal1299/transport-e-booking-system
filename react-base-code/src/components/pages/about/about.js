import React from 'react';
// import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faContactCard, faHandshakeAlt, faHomeAlt, faPeopleArrows, faPowerOff } from "@fortawesome/free-solid-svg-icons";

import './about.scss';
// import Home from '../home/home';
function About() {

    return (
        <div classN ame='about'>
            <div className='cont'>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <label className="navbar">car<span> -buy</span></label>
                    <ul>
                        <li><Link to="./home"><FontAwesomeIcon icon={faHomeAlt} />home</Link></li>
                        <li><Link to="./cars"><FontAwesomeIcon icon={faCarAlt} />cars</Link></li>
                        <li><Link to="./contact"><FontAwesomeIcon icon={faContactCard} />contact</Link></li>
                        <li><Link to="./about"><FontAwesomeIcon icon={faHandshakeAlt} />about</Link></li>
                        <li><Link to="./"><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                        {/* <li><Link to="./home1">home1</Link></li> */}
                        {/* <li><Link to="./cars1">car1</Link></li>  */}
                    </ul>
                </nav>
            </div>
            {/* <Link to={"./Home"} className='ho-p'>home-page</Link> */}
            <img src={'https://freepngimg.com/thumb/mercedes/72-black-mercedes-g-class-gelandewagen-car-png-image.png'} alt='car' />
            <h1>About Us</h1>
            <p>We are a company that specializes in providing a brand new cars around the world.
                Our team of experts has years of experience in various industries and automobile showrooms, and we are committed to helping our clients achieve their vehicle.
                Whether you need help with our website you can full specs and features of cars, we have the skills and knowledge to help you choose your car.
                Contact us today to learn more about how we can help your motoring...!</p>
            <p><Link to="./cars" className="btn">Search Vehicle</Link></p>
        </div>
    )
}
export default About;
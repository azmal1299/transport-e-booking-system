import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faContactCard, faHeart, faHandshakeAlt, faHomeAlt, faPowerOff,  faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import car from '../../../assets/images/car.jpg'
import Carousal from '../../shared/slider/slider';
import history from '../../../helpers/history';
import './home.scss';

function Home() {


    const handleSubmit=()=>{
        history.push("./contact")
    }
    return (
        
        <div className='home'>
            <img src={car} alt="car"></img>
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
                    <li><Link to="./admin"><FontAwesomeIcon icon={faCartArrowDown}/>Admin</Link></li> 

                    <li><Link to="./"><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                </ul>
            </nav>
            <div className='sections'>
                <section className='section1 '>
                    <div className="paa">best <span>car dealer</span> in town
                        <button className="contact1" onClick={()=>handleSubmit()}><FontAwesomeIcon icon={faContactCard} />contact-us</button>
                    </div>
            <div className='customers'>
                <div className='happy'>
                    <div className='row'>
                        <div className='col'>
                            <span className='subheading'>testimonial</span>
                            <h2>happy clients</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='carousel'>
                                <div className='owl'>
                                    <div className='owl-item'>
                                        <div className="testimony">
                                            <div className="user-img">
                                                <img src='https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=740&t=st=1678766155~exp=1678766755~hmac=8993bf655fc24431821fe8954100c687a399c4120daa9b147b3c4cfbc429b6eb' alt='person1' />
                                            </div>
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <div className="testimony">
                                            <div className="user-img">
                                                <img src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1678766607~exp=1678767207~hmac=581a5d95258d65e23d835b11aa8a59416a81962ae5cd23571ea734dfa5feed47' alt='person2' />
                                            </div>
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <div className="testimony">
                                            <div className="user-img">
                                                <img src='https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=740&t=st=1678766730~exp=1678767330~hmac=dedacbf9287a2c2632e5261c5dc96dd8dba0d258e0c2cac717d3b46411816eee' alt='person3' />
                                            </div>
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                        <div className="testimony">
                                            <div className="user-img">
                                                <img src='https://img.freepik.com/free-photo/portrait-young-happy-man-smiling-against-white-space_58466-12722.jpg?w=740&t=st=1678766786~exp=1678767386~hmac=8c4b54e23938325fa95cb09e2fd105623bb366031cf23a9d4f48392690741ac8' alt='person4' />
                                            </div>
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
            
            </div>

            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className="block-18">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="60">20+</strong>
                                    <span>Year <br />Experienced</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="1090">100+</strong>
                                    <span>Total <br />Cars</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="2590">2000+</strong>
                                    <span>Happy <br />Customers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18">
                                <div className="text d-flex align-items-center">
                                    <strong className="number" data-number="67">65+</strong>
                                    <span>Total <br />Branches</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <p>Copyright <span className='heart'>©2023</span> All rights reserved | This template is made with <span className='heart'>-<FontAwesomeIcon icon={faHeart} /></span> by azmal </p>
            </div>


        </div>
    )
}
export default Home;


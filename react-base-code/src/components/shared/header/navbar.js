// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarAlt, faContactCard, faHandHolding, faHandsBound, faHandshakeAlt, faHomeAlt, faManatSign, faPowerOff } from "@fortawesome/free-solid-svg-icons";
// // import {useHistory} from "react-router-dom";
// import cookies from "browser-cookies";
// // import { History } from '../../../helpers/history';
// import { Link } from 'react-router-dom';
// import './home2.scss';
// import { Navbar } from 'react-bootstrap';

// function Navbar() {
//     const handleLogout = () => {
//         cookies.erase("token");
//         history.push("/");
//       };
//       console.log("history: ", history.location.pathname);
    
//       const pathName = history.location.pathname;
    
//     return (
//         <div className='home'>
//             <nav>
//                 <input type="checkbox" id="check" />
//                 <label htmlFor="check" className="checkbtn">
//                     <i className="fa fa-bars"></i>
//                 </label>
//                 <label className="navbar">car<span> -buy</span></label>
//                 <ul>
//                     <li><Link to="./home"><FontAwesomeIcon icon={faHomeAlt} />home</Link></li>
//                     <li><Link to="./cars"><FontAwesomeIcon icon={faCarAlt} />cars</Link></li>
//                     <li><Link to="./contact"><FontAwesomeIcon icon={faContactCard} />contact</Link></li>
//                     <li><Link to="./about"><FontAwesomeIcon icon={faHandshakeAlt} />about</Link></li>
//                     <li><Link to="./" onClick={()=>handleLogout()}><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
//                     {/* <li><Link to="./home1">home1</Link></li>
//                         <li><Link to="./cars1">car1</Link></li> */}
//                 </ul>
//             </nav>
//             </div>
//             )
//             }
//             export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
// import { About,Home,Contact,Register,Login } from "../../pages/about/about";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import Home from "../../pages/home/home";
import Register from "../../pages/register/register";
import Login from "../../pages/SignIn/login";
import "./home2.scss"
// import siteLogo from '../../assets/images/logo.png'

function Header() {
//   const handleLogout = () => {
//     console.log("truly logout")
//   };

  return (
    <header id="main-header">
        <div className="container">
            <div className="header-content">
                <nav className="nav-logo" >
                    <Link to={ HOME }>
                        <img src={car} alt="site-logo" className="site-logo"/>
                    </Link>
                </nav>
                <nav className="navbar-list">
                    <ul>
                        <li>
                            <Link className="nav-link" to={ Home }>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={ About}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={ Contact }>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={ Login }>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={ Register }>
                                signup
                            </Link>
                        </li>
                        {/* <li onClick={handleLogout} className="logout">
                            Logout
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
}

export default Header;

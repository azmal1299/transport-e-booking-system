// import React from "react";
// import { Link } from "react-router-dom";
// import './footer.scss'
// // import history from "../../../helpers/history";
// function Footer() {
//     return (
//         <div className="footer">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="foot-wid">
//                             <h2>
//                                 <Link to={"./home"} />
//                             </h2>
//                             <p>we offerbest cars in city and we create a good environment for best customer experience</p>
//                             <ul>
//                                 <li>
//                                     <Link to={"./home"} />
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"} />
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"} />
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"} />
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <h5>information</h5>
//                         <ul>
//                             <li>
//                                 <Link to={"./about"}>about</Link>
//                             </li>
//                             <li>
//                                 <Link to={"./home"}>terms and condition</Link>
//                             </li>
//                             <li>
//                                 <Link to={"./home"}>best price guarentee</Link>
//                             </li>
//                             <li>
//                                 <Link to={"./home"}>privacy & cookies policy</Link>
//                             </li>
//                         </ul>
//                         <div className="col">
//                             <h5>customer support</h5>
//                             <ul>
//                                 <li>
//                                     <Link to={"./home"}>FAQ</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"}>payment</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"}>booking tips</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"}>how it work</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"./home"}>contact us</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <h5>have a question</h5>
//                         <ul>
//                             <li>
//                                 <Link to={"./home"}>FAQ</Link>
//                             </li>
//                             <li>
//                                 <Link to={"./home"}>aslme@123gmail.com</Link>
//                             </li>
//                             <li>
//                                 <Link to={"./home"}>+2 688 754 665</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
      
//         <div className="row-1">
//             <div className="col">
//                 <p>                
//                      Copyright ©
//                 </p>
//             </div>
//         </div>
//         </div >
//     )

// }
// export default Footer;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { ABOUT, CONTACT, HOME } from '../../config/constants/routepathconstants';
import './footer.scss';

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="footer-column1">
                    <h3 className='footer-title'>About Us</h3>
                    <p>We are a ticket booking platform for cricket enthusiasts. We aim to make it easy and convenient for fans to purchase tickets for their favorite matches.</p>
                </div>
                <div className="footer-column2">
                    <h3 className='footer-title'>Quick Links</h3>
                    <ul>
                    <li>
                            <NavLink className="navlink" to={ HOME }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to={ ABOUT }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to={ CONTACT }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-column3">
                    <h3 className='footer-title'>Contact Us</h3>
                    <p>123 Main Street</p>
                    <p>City, State 12345</p>
                    <p>Email: info@cricketticketbooking.com</p>
                    <p>Phone: 555-555-5555</p>
                </div>
                <div className="footer-bottom">
                    <p className="footer-text">&copy; 2023 Cricket Ticket Booking. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

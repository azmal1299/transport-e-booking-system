import React from "react"; 
import "./admin.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCarSide,  faHomeAlt, faMessage,  faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminScreen =() =>{
    return(
        <div className="adminpage">
            <div className='cont'>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <label className="navbar">car<span> -buy</span></label>
                    <ul>
                        <li><Link to="./home"><FontAwesomeIcon icon={faHomeAlt} />home</Link></li>
                        <li><Link to="./carDetails"><FontAwesomeIcon icon={faCarSide} />cars</Link></li>
                        <li><Link to="./contactDetails"><FontAwesomeIcon icon={faMessage} />contact</Link></li>
                        <li><Link to="./userDetails"><FontAwesomeIcon icon={faUser} />about</Link></li>
                        <li><Link to="./"><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
            <h1>admin panel</h1>
            <div className="details">
                <ul>
                    <li>all user</li>
                    <li>all booking</li>
                    <li>all Messages</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default AdminScreen;
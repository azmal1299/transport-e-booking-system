import React, { useState } from "react";
import './personaldetail.scss';
import { Link } from "react-router-dom";
import car from "../../../assets/images/car.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
// import history from "../../../helpers/history";
import swal from "sweetalert";
import Axios from 'axios';



function Booking() {


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobile] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [town, setTown] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [dealerName, setDealerName] = useState('');
  const [dealerCity, setDealerCity] = useState('');
  const [dealerState, setDealerState] = useState('');
  const [bookingList, setBookingList] = useState([])
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedVarient, setSelectedVarient] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("http://localhost:1337/api/booking/insert", {
        fullName,
        email,
        mobileNumber,
        phoneNumber,
        street,
        town,
        city,
        pincode,
        dealerName,
        dealerCity,
        dealerState,
 selectedCar,
         selectedVarient,
      selectedColor
    
      });
      console.log(response);
      swal('booking successfull');
    } catch (error) {
      console.log(error);
    }
  }


 

  return (
    <div className="bookingpage">
      
      <div className="books">
        <img src={car} alt="car"></img>
      </div>
      <div className="bookingdetail">
        <div className="click">
          <Link to="./home" className="button" >home</Link>
        </div>
        <div className="ebook">
          <p>EBOOKING</p>
        </div>
        <div className="steps">
          <ul className="list">
            <li>Step-1</li>
            <li>Step-2</li>
            <li>Step-3</li>
          </ul>
        </div>
        <div className="ebooktable">
          <div className="p-detail">
            <div className="details">
              <ul className="list">
                <li className="personal-details-form">
                  <div className="heading">
                    <span>1</span>
                    <h5>personal details</h5>
                  </div>
                  <div className="inner-content">
                    <div className="form">
                      <div className="formgroup">
                        <div className="form-group1">
                          <div className="form-group">
                            <label>enter your fullname *</label>
                            <input type="text" className="input" name="name" value={fullName}
                              onChange={(e) => setFullName(e.target.value, 'fullName')}
                              placeholder="fullname *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter your email *</label>
                            <input type="email" className="input" name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value, 'email')}
                              placeholder="email *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter your street *</label>
                            <input type="text" className="input" name="street"
                              value={street}
                              onChange={(e) => setStreet(e.target.value, 'street')}
                              placeholder="street *" minLength={3} maxLength={30} />
                          </div>
                        </div>
                        <div className="form-group1">
                          <div className="form-group">
                            <label>enter your mobile *</label>
                            <input type="number" className="input" name="mobile"
                              value={mobileNumber}
                              onChange={(e) => setMobile(e.target.value, 'mobileNumber')}
                              placeholder="mobile *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter your phone </label>
                            <input type="number" className="input" name="phone"
                              value={phoneNumber}
                              onChange={(e) => setPhone(e.target.value, 'phoneNumber')}
                              placeholder="phone *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter your pincode *</label>
                            <input type="number" className="input" name="pincode"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value, 'pincode')}
                              placeholder="pincode *" minLength={3} maxLength={30} />
                          </div>
                        </div>
                        <div className="form-group1">
                          <div className="form-group">
                            <label>enter your town *</label>
                            <input type="text" className="input" name="town"
                              value={town}
                              onChange={(e) => setTown(e.target.value, 'town')}
                              placeholder="town *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter your city *</label>
                            <input type="text" className="input" name="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value, 'city')}
                              placeholder="city *" minLength={3} maxLength={30} />
                          </div>
                          {/* <div className="form-group">
                            <label>enter your State * </label>
                            <input type="text" className="input" name="State"
                              value={State}
                              onChange={(e) => setState(e.target.value, 'States')}
                              placeholder="State *" minLength={3} maxLength={30} />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="personal-details-form">
                  <div className="heading">
                    <span>2</span>
                    <h5>car details</h5>
                  </div>
                  <div className="inner-content">
                    <div className="form ">
                      <div className="formgroup">
                        <div className="carlogo">
                          <div className="innerleft">
                            <div className="carimage">
                              <p><FontAwesomeIcon icon={faCar} className="icon" /></p>
                            </div>
                            <div className="desc">
                              <p>Ex-showroom Price </p><p className="rupees">₹ <span id="ex-show-price">N/A</span></p><p></p>
                              <h6>Booking amount<p className="rupees">₹ <span id="booking-amt">N/A</span></p></h6>
                            </div>
                          </div>
                        </div>
                        <div className="form-group1">
                          <div className="form-group">
                            <label>select your car *</label>
                            <select className="form-control" name="ebookcar" id="ebook-car" 
                            onChange={(event) => setSelectedCar(event.target.value)}>
                              <option value="">Select Car*</option>
                              <option value="Harrier">Harrier</option>
                              <option value="Hycross">Inova Hycross</option>
                              <option value="Fortuner">Fortuner</option>
                              <option value="Nexon">Nexon</option>
                              <option value="polo">Polo</option>
                              <option value="Amg">Amg</option>
                              <option value="M8">M8</option>
                              <option value="Scorpio">Scorpio</option>
                              <option value="Virtus">Virtus</option>
                              <option value="Vitara">Vitara</option>
                              <option value="XUV-700">XUV-700</option>
                              <option value="G-Wagon">G-Wagon</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>select your varient </label>
                            <select className="form-control" name="ebookvariant" id="ebook-variant"
                            onChange={(event) => setSelectedVarient(event.target.value)}>
                              <option value="">Select Variant*</option>
                              <option value="ZX+">ZX+</option>
                              <option value="ZL">ZL</option>
                              <option value="ZS">ZS</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>select your favorite color </label>
                            <select className="form-control" name="ebookvariant" id="ebook-color"
                            onChange={(event) => setSelectedColor(event.target.value)}> 
                              <option value="">Select Color*</option>
                              <option value="FIRE-RED">FIRE-RED</option>
                              <option value="AQUA-BLUE">AQUA-BLUE</option>
                              <option value="BERRY-GREEN">BERRY-GREEN</option>
                              <option value="DEEP-GREEN">DEEP-BLACK</option>
                              <option value="CLASSY-WHITE">CLASSY-WHITE</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dealer-details">
                  <div className="heading">
                    <span>3</span>
                    <h5>dealer details</h5>
                  </div>
                  <div className="inner-content">
                    <div className="form">
                      <div className="formgroup">
                        <div className="form-group2">
                          <div className="form-group">
                            <label>enter dealer name *</label>
                            <input type="text" className="input" name="dealer name"
                              value={dealerName}
                              onChange={(e) => setDealerName(e.target.value, 'dealerName')}
                              placeholder="dealer name *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter dealer city *</label>
                            <input type="text" className="input" name="city"
                              value={dealerCity}
                              onChange={(e) => setDealerCity(e.target.value, 'dealerCity')}
                              placeholder="dealer city *" minLength={3} maxLength={30} />
                          </div>
                          <div className="form-group">
                            <label>enter dealer State*</label>
                            <input type="text" className="input" name="State"
                              value={dealerState}
                              onChange={(e) => setDealerState(e.target.value, 'dealerSate')}
                              placeholder="dealer state *" minLength={3} maxLength={30} />
                          </div>
                        </div>
                      </div>
                      <div className="formgroup">
                        <div className="checkbox">
                          <span className="mandatory">The fields marked as * are mandatory</span>
                          <label>
                            <input type="checkbox" value name="agree" />
                            <div className="ebook-content">
                              I agree that by clicking the 'Submit' button below, I am explicitly agreeing to following:
                              <div>
                                <br />
                                <ol type="1">
                                  <li>Soliciting a call and message via WhatsApp or any other medium from Maruti Suzuki India Ltd or its affiliates, authorized dealerships, partners, subsidiary companies etc. on Mobile number stated by me.</li>
                                  <li>Cancellation charges (Of Rs 500) will be applicable for booking done from the date of Launch (after official price reveal) of the vehicle.</li>
                                  <li>In case of cancellation within period of 6 months from date of booking, amount will be refunded online into source account only. For any cancellation beyond this period, refund would be settled offline between customer and dealer selected at time of booking.</li>
                                </ol>
                              </div></div><br />
                          </label>
                          <span className="price_disclaimer_effected">*Prices/Schemes prevailing at the time of invoice /bill shall be applicable.</span>
                          {/* { */}
                          {/* // isEdit ?  */}
                          <button type="submit" onClick={() => handleSubmit()} className="submit-btn">Continue</button>
                          {/* : <button onClick={() => handleUpdate()} className="submit-btn">update</button> */}
                          {/* <button type="submit" onClick={() => handleRead()} className="submit-btn2">booking details</button> */}
                          {/* <button type="submit" onClick={() => handleDelete()} className="submit-btn3"> cancel booking </button> */}

                          {/* // } */}

                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}
export default Booking;
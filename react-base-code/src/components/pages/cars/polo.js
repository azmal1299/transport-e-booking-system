import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faClose, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './singlecar.scss';

const PDF_FILE_URL = "http://localhost:9001/polo/pologti.pdf"


function Polo() {

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
            <div className="car-det">
              <img src='https://imgd.aeplcdn.com/1056x594/cw/ec/21687/Volkswagen-GTI-Exterior-119312.jpg?wm=1&q=75' alt="car8" />
              <div className="text"><span className="subheading">volkswagen</span>
                <h2 className="text">polo-GTi</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <h5 className="text">car-details</h5> */}
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faDashboard} className="icons-1" /></p>
                  <p>milage<br />
                    09 to 12-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} className="icons-1" /></p>
                  <p>seating-capacity<br />
                    4-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} className="icons-1" /></p>
                  <p>Luggage-capacity<br />
                    185-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} className="icons-1" /></p>
                  <p>fuel capacity<br />
                    38-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} className="icons-1" /></p>
                  <p>transmission<br />
                    7 speed-gear(automatic)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="content">
                <div className="content-list">
                  <ul className="nav">
                    <li className="nav-list">features</li>
                    <li className="nav-list">discription</li>
                  </ul>
                </div>
                <div className="tab-content" id="pills">
                  <div className="tab-item">
                    <div className="row">
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />airconditioner</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />child-seat</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon" />GPS</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />Luggage</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />Music</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />seatbelt</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faClose} className="icon" />Sleeping bed</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />bottle holder</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />blutooth,USB</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon" />onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />touch-display</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />remote key</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon" />ADOS-feature</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />traction control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />hilldescent control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />wireless Mobile-charger</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />alloy wheel</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon" />four wheel-drive</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon" />panaromic moon-roof</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />climate control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />child safety-lock</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="discription">
                  <h3>discription</h3>
                  <p>
                    Volkswagen GTI [2016-2019] 1.8 TSI is the top model in the GTI [2016-2019] lineup
                    and the price of GTI [2016-2019] top model is ₹ 20.00 Lakh.It returns a certified
                    mileage of 16.34 kmpl. This 1.8 TSI variant comes with an engine putting out 189
                    bhp @ 5400 rpm and 250 Nm @ 1250 rpm of max power and max torque respectively.
                    Volkswagen GTI [2016-2019] 1.8 TSI is available in Automatic transmission and
                    offered in 4 colours: Black, Flash Red, Reflex Silver and Pure White.
                  </p>
                </div>
                <div className="btns">
                  <Link to={"./booking"} className="book">book-here</Link>
                  <button onClick={() => { downloadFileAtURL(PDF_FILE_URL) }} className="download-btn"><FontAwesomeIcon icon={faFilePdf}/>download brochure</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv>
  )
}
export default Polo;

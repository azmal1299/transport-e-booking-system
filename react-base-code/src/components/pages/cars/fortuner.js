import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faClose,faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './singlecar.scss';

const PDF_FILE_URL = "http://localhost:9001/fortuner/fortuner.pdf"

function Fortuner() {
 
  const downloadFileAtURL = (url) => {
    fetch(url)
    .then((response) => response.blob())
    .then((blob) =>{
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
    <div>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
            <div className="car-det">
              <img src='https://img.indianautosblog.com/2020/06/04/toyota-fortuner-legender-red-black-front-quarters-273f.jpg' alt="2" />
              <div className="text"><span className="subheading">toyota</span>
                <h2 className="text">fortuner lagender-(4x4)</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faDashboard} className="icons-1" /></p>
                  <p>milage<br />
                    08-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} className="icons-1" /></p>
                  <p>seating-capacity<br />
                    7-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} className="icons-1" /></p>
                  <p>Luggage-capacity<br />
                    75-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} className="icons-1" /></p>
                  <p>fuel capacity<br />
                    70-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} className="icons-1" /></p>
                  <p>transmission<br />
                    7-gear(automatic)
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

                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />traction control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />hilldescent control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />wireless Mobile-charger</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />alloy wheel</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons" />four wheel-drive</li>
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
                    Tata Toyota Fortuner Legender 4X4 AT 2.8 Legender is the top model in the Toyota Fortuner Legender lineup and the
                    price of Fortuner Legender top model is ₹ 46.54 Lakh.It returns a certified mileage of 14.2 kmpl. This 4X4 AT 2.8
                    Legender variant is the Toyota Fortuner Legender top model and comes with an engine putting out 201 bhp @ 3000 rpm
                    and 500 Nm @ 1600 rpm of max power and max torque respectively. Toyota Fortuner Legender 4X4 AT 2.8 Legender is available
                    in Automatic (TC) transmission and offered in a colour: White Pearl Crystal Shine with Black Roof.

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
    </div>
  )
}
export default Fortuner;

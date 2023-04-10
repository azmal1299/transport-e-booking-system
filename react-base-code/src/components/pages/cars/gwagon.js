import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faClose,faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './singlecar.scss';

const PDF_FILE_URL = "http://localhost:9001/gwagon/gwagon.pdf"

function Gwagon() {

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
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
          <div className="car-det">
            <img src='https://freepngimg.com/thumb/mercedes/72-black-mercedes-g-class-gelandewagen-car-png-image.png' alt="car9" />
            <div className="text"><span className="subheading">mercedes</span>
              <h2 className="text">G-wagon</h2>
            </div>
            </div>
          </div>
          <div className="row">
            {/* <h5 className="text">car-details</h5> */}
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faDashboard} className="icons-1"/></p>
                  <p>milage<br />
                    06-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} className="icons-1"/></p>
                  <p>seating-capacity<br />
                    5-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} className="icons-1" /></p>
                  <p>Luggage-capacity<br />
                    335-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} className="icons-1"/></p>
                  <p>fuel capacity<br />
                    95-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} className="icons-1"/></p>
                  <p>transmission<br />
                    9 speed-gear(automatic)
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
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>airconditioner</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>child-seat</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>GPS</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>Luggage</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>Music</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>seatbelt</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faClose} className="icon"/>Sleeping bed</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>bottle holder</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>blutooth,USB</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon"/>onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>touch-display</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>remote key</li>
                          {/* <li><FontAwesomeIcon icon={faCheck}/>ADOS-feature</li> */}
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>traction control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>hilldescent control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>wireless Mobile-charger</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>alloy wheel</li>
                          {/* <li><FontAwesomeIcon icon={faCheck}/>four wheel-drive</li> */}
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>panaromic moon-roof</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>climate control</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>child safety-lock</li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className="discription">
                  <h3>discription</h3>
                  <p>
                  The Mercedes-Benz G-Class has 1 Diesel Engine on offer. The Diesel engine is 
                  2925 cc . It is available with Automatic transmission.Depending upon the variant 
                  and fuel type the G-Class has a mileage of 8.13 kmpl & Ground clearance of G-Class 
                  is 241 mm. The G-Class is a 5 seater 6 cylinder car and has length of 4606 mm, 
                  width of 1976 mm and a wheelbase of 2850mm..</p>
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
export default Gwagon;

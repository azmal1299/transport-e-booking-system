import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faClose,faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './singlecar.scss';

const PDF_FILE_URL = "http://localhost:9001/harrier/harrier.pdf"


function Harrier() {

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
            <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
            <div className="text"><span className="subheading">tata</span>
              <h2 className="text">harrier zx+</h2>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faDashboard} className="icons-1"/></p>
                  <p>milage<br />
                    14kmpl
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
                    425-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} className="icons-1" /></p>
                  <p>fuel capacity<br />
                    50-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear}className="icons-1"/></p>
                  <p>transmission<br />
                    6-gear(automatic)
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
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>blutooth</li>
                          <li><FontAwesomeIcon icon={faClose} className="icon"/>onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>touch-display</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>audio-input</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>USB</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>Mobile charger</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>car kit</li>
                          <li><FontAwesomeIcon icon={faCheck} className="icons"/>remote key</li>
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
Tata Harrier is available in a manual and automatic diesel engine with a capacity of 1956cc, 4 cylinders. The key specification of Tata Harrier includes OMEGARC (Optimal Modular Efficient Global Advanced Architecture) derived from Land Rover’s D8 platform.
Tata Harrier specifications include dimensions - length of 4598 mm, the width of 1894 mm, the height of 1706 mm, and boot space is 425 l.
Tata Harrier is an SUV with 5 seater capacity and with a fuel capacity of 50 l. Check out the other technical specifications of Tata Harrier including suspension, transmission, brakes, and other specs. Also, explore Tata Harrier features to know about safety, design, interior, exterior, and more.
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
export default Harrier;

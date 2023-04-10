import React from "react";
import Slider from "react-slick";
// import car from "../../assets/images/car.jpg";
// import car from "../../assets/images/car.jpg"
// import car from "../../assets/images/car.jpg"
// import car from "../../assets/images/car.jpg"
// import car from "../../assets/images/car.jpg"
// import car from "../../assets/images/car.jpg"
// import car from "../../assets/images/car.jpg"
import car from '../../../assets/images/car.jpg';
import './slider.scss'

export const Carousal = () =>  {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
      <div className="banner-slider">
        <Slider {...settings}>
            <div className="slider-img">
                <img src={car} alt="Ipl-logo" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
            <div className="slider-img">
                <img src={car} alt="Ipl-image1" />
            </div>
        </Slider>
      </div>
    );
}
export default Carousal;
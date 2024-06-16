import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpperPost from "../Body/UpperPost/page";
import { Button } from "../../helpers/Button";
import { Footer } from "../Body/Footer/page";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const txtReservation = "Book Reservation Now";
  
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="siteHeader">
            <div className="main_Heading">
              <h5 className="Khawaja">KHAWAJA YANNI</h5>
              <h5 className="Luxury">
                The new <span className = "block"></span> era of Luxury
              </h5>
              <p className="Lorem Lorem2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className = "block"></span>
                omnis sint vel distinctio rem nisi quam enim!
              </p>
              <Button btnText={txtReservation} />
            </div>
          </div>
        </div>

        <div>
          <div className="siteHeader">
            <div className="main_Heading">
              <h5 className="Khawaja">SECOND SLIDE</h5>
              <h5 className="Luxury">
                Another <span className="block"></span> era of Luxury
              </h5>
              <p className="Lorem Lorem2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="block"></span>
                omnis sint vel distinctio rem nisi quam enim!
              </p>
              <Button btnText={txtReservation} />
            </div>
          </div>
        </div>
        <div>
          <div className="siteHeader">
            <div className="main_Heading">
              <h5 className="Khawaja">THIRD SLIDE</h5>
              <h5 className="Luxury">
                Another <span className="block"></span> era of Luxury
              </h5>
              <p className="Lorem Lorem2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="block"></span>
                omnis sint vel distinctio rem nisi quam enim!
              </p>
              <Button btnText={txtReservation} />
            </div>
          </div>
        </div>
        <div>
          <div className="siteHeader">
            <div className="main_Heading">
              <h5 className="Khawaja">FOURTH SLIDE</h5>
              <h5 className="Luxury">
                Another <span className = "block"></span> era of Luxury
              </h5>
              <p className="Lorem Lorem2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className = "block"></span>
                omnis sint vel distinctio rem nisi quam enim!
              </p>
              <Button btnText={txtReservation} />
            </div>
          </div>
        </div>
      </Slider>
      <UpperPost />
    </>
  );
}

export default Banner;

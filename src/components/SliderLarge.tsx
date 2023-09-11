import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../style/modules/slider.scss";

export default class SimpleSliderL extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "290px",
      slidesToShow: 0.9,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./img/slide1.png" alt="slide" />
            <a href="/" className="slider__boxL">
              <h1>Bohauss</h1>
              <p>Luxury big sofa 2-seat</p>
              <div className="slider__boxL_container">
                <h2>Rp 17.000.000</h2>
                <img src="img/svg/arrow.svg" alt="" />
              </div>
            </a>
          </div>
          <div>
            <img src="./img/slide2.png" alt="slide" />
            <a href="/" className="slider__boxL">
              <h1>Lorem</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="slider__boxL_container">
                <h2>Rp 9.000.000</h2>
                <img src="img/svg/arrow.svg" alt="" />
              </div>
            </a>
          </div>
          <div>
            <img src="./img/slide3.png" alt="slide" />
            <a href="/" className="slider__boxL">
              <h1>Lorem, ipsum.</h1>
              <p>Lorem, ipsum dolor.</p>
              <div className="slider__boxL_container">
                <h2>Rp 11.000.000</h2>
                <img src="img/svg/arrow.svg" alt="" />
              </div>
            </a>
          </div>
          <div>
            <img src="./img/slide2.png" alt="slide" />
            <a href="/" className="slider__boxL">
              <h1>Bohauss</h1>
              <p>Lorem, ipsum.</p>
              <div className="slider__boxL_container">
                <h2>Rp 17.000.000</h2>
                <img src="img/svg/arrow.svg" alt="" />
              </div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

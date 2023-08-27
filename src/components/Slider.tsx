import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../style/modules/slider.scss"


export default class SimpleSlider extends Component {  
  render() {
    const settings = {
      fade: true,
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./img/slide1.png" alt="slide" />
            <a href="/" className="slider__box">
              <h1>Bohauss</h1>
              <p>Luxury big sofa 2-seat</p>
              <h2>Rp 17.000.000</h2>
            </a>
          </div>
          <div>
            <img src="./img/slide2.png" alt="slide" />
            <a href="/" className="slider__box">
              <h1>Lorem</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>Rp 17.000.000</h2>
            </a>
          </div>
          <div>
            <img src="./img/slide3.png" alt="slide" />
            <a href="/" className="slider__box">
              <h1>Bohauss</h1>
              <p>Lorem, ipsum dolor.</p>
              <h2>Rp 17.000.000</h2>
            </a>
          </div>
          <div>
            <img src="./img/slide2.png" alt="slide" />
            <a href="/" className="slider__box">
              <h1>Bohauss</h1>
              <p>Lorem, ipsum.</p>
              <h2>Rp 12.000.000</h2>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
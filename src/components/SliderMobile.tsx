import { useState, useEffect } from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, setSlideNum } from "../features/sliderSlice";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

export const SliderMobile = () => {
  const { slide } = useSelector((state: RootState) => state.slide);
  const dispatch = useDispatch();

  const useResize = () => {
    const [size, setSize] = useState(0);

    useEffect(() => {
      const getSize = () => setSize(window.innerWidth);
      getSize();
      window.addEventListener("resize", getSize);
      return () => window.removeEventListener("resize", getSize);
    }, []);
    return size;
  };

  const windowWidth = useResize();


  const gap = 20;
  let slideSize = 340;
  const countSlide = 4;
  let maxWidth = slideSize * countSlide + gap * 4;

  if (windowWidth > 500) {
    slideSize = 460;
    maxWidth = slideSize * countSlide + gap * 4
  }

  if (windowWidth > 600) {
    slideSize = 520;
    maxWidth = slideSize * countSlide + gap * 4
  }

  if (windowWidth > 800) {
    slideSize = 680;
    maxWidth = slideSize * countSlide + gap * 4
  }

  if (windowWidth > 1000) {
    slideSize = 900;
    maxWidth = slideSize * countSlide + gap * 4
  }

  if (windowWidth > 1100) {
    slideSize = 934;
    maxWidth = slideSize * countSlide + gap * 4
  }


  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (slide === 4) {
      dispatch(setSlideNum(0));
    }

    const interval = setInterval(() => {
      dispatch(plus());
    }, 4000);

    return () => clearInterval(interval);
  }, [dispatch, slide]);

  const toggleSlides = (sign: string) => {
    if (slide + 1 > 3 && sign === "plus") {
      return dispatch(setSlideNum(0));
    }

    if (sign === "plus") {
      dispatch(plus());
    }

    if (slide - 1 < 0 && sign === "minus") {
      return dispatch(setSlideNum(3));
    }

    if (sign === "minus") {
      dispatch(minus());
    }
  };

  return (
    <div className="slider">
      <div className="slider__dots">
        <ul className="slider__dots-list">
          {[0, 1, 2, 3].map((dot) => (
            <li
              key={dot}
              className={classNames("slider__dots-item", {
                isActiveDot: dot === slide,
              })}
            >
              <button onClick={() => dispatch(setSlideNum(dot))}></button>
            </li>
          ))}
        </ul>
      </div>
      <div className="slider__control">
        <button onClick={() => toggleSlides("minus")}>
          <img src="img/right.svg" alt="arrow" />
        </button>
        <button onClick={() => toggleSlides("plus")}>
          <img src="img/right.svg" alt="arrow" />
        </button>
      </div>

      <ul
        className="slider__list"
        style={{ width: `${slideSize + gap}px`, gap: `${gap}px` }}
      >
        <li
          className="slider__item"
          style={{
            minWidth: `${slideSize}px`,
            transform: `translate(${
              slide > 0 ? maxWidth - slide * (slideSize + gap) : -slide
            }px)`,
          }}
        >
          <img src="./img/slide1.png" alt="slide" />
          {slide === 0 && (
            <a
              href="/"
              className="slider__box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>Bohauss</h1>
              <p>Luxury big sofa 2-seat</p>
              <h2>Rp 17.000.000</h2>
            </a>
          )}
        </li>
        <li
          className="slider__item"
          style={{
            minWidth: `${slideSize}px`,
            transform: `translate(${
              slide > 1
                ? maxWidth - slide * (slideSize + gap)
                : -slide * (slideSize + gap)
            }px)`,
          }}
        >
          <img src="./img/slide2.png" alt="slide" />
          {slide === 1 && (
            <a
              href="/"
              className="slider__box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>Lorem</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>Rp 17.000.000</h2>
            </a>
          )}
        </li>
        <li
          className="slider__item"
          style={{
            minWidth: `${slideSize}px`,
            transform: `translate(${
              slide > 2
                ? maxWidth - slide * (slideSize + gap)
                : -slide * (slideSize + gap)
            }px)`,
          }}
        >
          <img src="./img/slide3.png" alt="slide" />
          {slide === 2 && (
            <a
              href="/"
              className="slider__box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>Bohauss</h1>
              <p>Lorem, ipsum dolor.</p>
              <h2>Rp 17.000.000</h2>
            </a>
          )}
        </li>
        <li
          className="slider__item"
          style={{
            minWidth: `${slideSize}px`,
            transform: `translate(-${slide * (slideSize + gap)}px)`,
          }}
        >
          <img src="./img/slide2.png" alt="slide" />
          {slide === 3 && (
            <a
              href="/"
              className="slider__box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>Bohauss</h1>
              <p>Lorem, ipsum.</p>
              <h2>Rp 12.000.000</h2>
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

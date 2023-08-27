import { useEffect, useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import SimpleSlider from './components/Slider';
import SimpleSliderL from './components/SliderLarge';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: "1",
    link: "img/image1.png",
    title: "Syltherine",
    describe: "Stylish cafe chair",
    price: "RP 2.500.000",
    discount: "-30%",
    priceWithDiscount: "RP 3.500.000",
  },

  {
    id: "2",
    link: "img/image2.png",
    title: "Leviosa",
    describe: "Stylish cafe chair",
    price: "RP 2.500.000",
  },

  {
    id: "3",
    link: "img/image3.png",
    title: "Lolito",
    describe: "Luxury big sofa",
    price: "Rp 7.000.000",
    discount: "-50%",
    priceWithDiscount: "Rp 14.000.000",
  },
  {
    id: "4",
    link: "img/image4.png",
    title: "Respira",
    describe: "Minimalist fan",
    price: "RP 500.000",
    discount: "New",
  },
  {
    id: "5",
    link: "img/image5.png",
    title: "Grifo",
    describe: "Night lamp",
    price: "Rp 3.500.000",
  },
  {
    id: "6",
    link: "img/image6.png",
    title: "Muggo",
    describe: "Small mug",
    price: "RP 150.000",
    discount: "New",
  },
  {
    id: "7",
    link: "img/image7.png",
    title: "Pingky",
    describe: "Cute bed set",
    price: "Rp 7.000.000",
    discount: "-50%",
    priceWithDiscount: "Rp 14.000.000",
  },
  {
    id: "8",
    link: "img/image8.png",
    title: "Potty",
    describe: "Minimalist flower pot",
    price: "Rp 500.000",
    discount: "New",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOrder, sethasOrder] = useState(0);
  const [roomSlide, setRoomSlide] = useState(0);

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (roomSlide === 4) {
      setRoomSlide(0);
    }

    const interval = setInterval(() => {
      setRoomSlide(roomSlide + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [roomSlide]);

  const toggleSlider = (sign: string) => {
    if (roomSlide + 1 > 3 && sign === "plus") {
      return setRoomSlide(0);
    }

    if (sign === "plus") {
      setRoomSlide(roomSlide + 1);
    }
  };

  const handleMouseEnter = (id: number) => {
    sethasOrder(id);
  };

  const handleMouseLeave = () => {
    sethasOrder(0);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__nav" data-aos="fade-down" data-aos-duration="1000">
              <nav className="nav">
                <ul className="nav__list-menu">
                  <li className="nav__item-menu">
                    <a href="/">
                      <img src="img/svg/Funiro.svg" alt="arrow" />
                    </a>
                  </li>

                  <li
                    className={classNames("menu-btn", { active: isOpen })}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>

                <ul className={classNames("nav__list", { active: isOpen })}>
                  <li className="nav__item">
                    <a href="/">
                      <img src="img/svg/Funiro.svg" alt="arrow" />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="/">
                      Products
                      <img
                        src="img/svg/Arrow-down.svg"
                        alt="arrow"
                        className="nav__img"
                      />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="/">
                      Rooms
                      <img
                        src="img/svg/Arrow-down.svg"
                        alt="arrow"
                        className="nav__img"
                      />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="/">Inspirations</a>
                  </li>

                  <li className="nav__item">
                    <img src="img/svg/Ellipse.svg" alt="search" />
                    <input
                      type="text"
                      placeholder="Search for minimalist chair"
                    />
                  </li>
                </ul>
              </nav>

              <div className="nav-bar">
                <ul className="nav-bar__list">
                  <li className="nav-bar__item">
                    <a href="/">
                      <img src="img/svg/Heart.svg" alt="liked" />
                    </a>
                  </li>

                  <li className="nav-bar__item">
                    <a href="/">
                      <img src="img/svg/Cart.svg" alt="cart" />
                    </a>
                  </li>

                  <li className="nav-bar__item">
                    <a href="/">
                      <img src="img/Ellipse2.png" alt="cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header__content">
              <div className="header__info">
                <h1>High-Quality Furniture Just For You</h1>
                <p>
                  Our furniture is made from selected and best quality materials
                  that are suitable for your dream home
                </p>
                <button className="button">Shop Now</button>
              </div>
            </div>

            <div className="header__container">
              <SimpleSlider></SimpleSlider>
            </div>

            <div className="slider-large">
              <SimpleSliderL></SimpleSliderL>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="advantages" data-aos="fade-left" data-aos-duration="1000">
          <div className="container">
            <div className="advantages__inner">
              <ul className="advantages__list">
                <li className="advantages__item">
                  <img src="img/svg/cup.svg" alt="cup" />
                  <div>
                    <h1>High Quality</h1>
                    <p>crafted from top materials</p>
                  </div>
                </li>

                <li className="advantages__item">
                  <img src="img/svg/ok.svg" alt="ok" />
                  <div>
                    <h1>Warrany Protection</h1>
                    <p>Over 2 years</p>
                  </div>
                </li>

                <li className="advantages__item">
                  <img src="img/svg/gift.svg" alt="gift" />
                  <div>
                    <h1>Free Shipping</h1>
                    <p>Order over 150 $</p>
                  </div>
                </li>

                <li className="advantages__item">
                  <img src="img/svg/sup.svg" alt="ok" />
                  <div>
                    <h1>24 / 7 Support</h1>
                    <p>Dedicated support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <div className="products__inner">
              <h1 className="products__head">Our Products</h1>

              <ul className="products__list">
                {products.map((product) => {
                  const {
                    id,
                    link,
                    title,
                    describe,
                    price,
                    discount,
                    priceWithDiscount,
                  } = product;

                  return (
                    <li
                      key={id}
                      onMouseEnter={() => handleMouseEnter(+id)}
                      onMouseLeave={handleMouseLeave}
                      className="products__item"
                      data-aos="flip-left"
                      data-aos-duration="1000"
                    >
                      {+id === hasOrder && (
                        <div className="products__hover">
                          <button className="products__add">Add to cart</button>
                          <div>
                            <button className="products__share">
                              <img src="img/svg/share.svg" alt="share" />
                              <p>Share</p>
                            </button>
                            <button className="products__like">
                              <img src="img/svg/like.svg" alt="like" />
                              <p>Like</p>
                            </button>
                          </div>
                        </div>
                      )}
                      <img src={link} alt={title} />
                      <div className="products__item-box">
                        <h1 className="products__title">{title}</h1>
                        <p className="products__describe">{describe}</p>
                        <h2 className="products__price">{price}</h2>
                        <p className="products__priceWithDiscount">
                          {priceWithDiscount}
                        </p>
                      </div>
                      {discount && (
                        <div
                          className="products__circle"
                          style={
                            discount === "New"
                              ? { backgroundColor: "#2EC1AC" }
                              : { backgroundColor: "#E97171" }
                          }
                        >
                          {discount}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <button className="products__show-more">Show More</button>
            </div>
          </div>
        </section>

        <section className="inspiration">
          <div className="container">
            <div className="inspiration__inner">
              <div className="inspiration__info" data-aos="fade-right" data-aos-duration="1000">
                <h1 className="inspiration__title">
                  50+ Beautiful rooms inspiration
                </h1>
                <p>
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button className="button">Explore More</button>
              </div>

              <div className="slider-rooms">
                <ul className="slider-rooms__list">
                  <li
                    className={classNames("slider-rooms__item", {
                      isActiveSlide: roomSlide === 0,
                    })}
                    style={{
                      transform: `translate(${
                        roomSlide > 0 ? 4 - roomSlide : -roomSlide
                      }00%)`,
                    }}
                  >
                    <img src={`img/rooms/img1.png`} alt="" />

                    {roomSlide === 0 && (
                      <div className="slider-rooms__item-price" data-aos="fade-up" data-aos-duration="1000">
                      <p>01 - Bed Room</p>
                      <h1>Inner Peace</h1>
                    </div>
                    )}
                  </li>

                  <li
                    className={classNames("slider-rooms__item", {
                      isActiveSlide: roomSlide === 1,
                    })}
                    style={{
                      transform: `translate(${
                        roomSlide > 1 ? 4 - roomSlide : -roomSlide
                      }00%)`,
                    }}
                  >
                    <img src={`img/rooms/img2.png`} alt="" />
                    {roomSlide === 1 && (
                      <div className="slider-rooms__item-price" data-aos="fade-up" data-aos-duration="1000">
                      <p>Lorem, ipsum.</p>
                      <h1>Lorem, ipsum.</h1>
                    </div>
                    )}
                  </li>

                  <li
                    className={classNames("slider-rooms__item", {
                      isActiveSlide: roomSlide === 2,
                    })}
                    style={{
                      transform: `translate(${
                        roomSlide > 2 ? 4 - roomSlide : -roomSlide
                      }00%)`,
                    }}
                  >
                    <img src={`img/rooms/img3.png`} alt="" />
                    {roomSlide === 2 && (
                      <div className="slider-rooms__item-price" data-aos="fade-up" data-aos-duration="1000">
                      <p>02 - Lorem, ipsum.</p>
                      <h1>Lorem, ipsum.</h1>
                    </div>
                    )}
                  </li>

                  <li
                    className={classNames("slider-rooms__item", {
                      isActiveSlide: roomSlide === 3,
                    })}
                    style={{
                      transform: `translate(-${roomSlide}00%)`,
                    }}
                  >
                    <img src={`img/rooms/img4.png`} alt="" />
                    {roomSlide === 3 && (
                      <div className="slider-rooms__item-price" data-aos="fade-up" data-aos-duration="1000">
                      <p>03 - Lorem</p>
                      <h1>Lorem, ipsum.</h1>
                    </div>
                    )}
                  </li>
                </ul>
              </div>

              <div className="slider-rooms-control">
                <button
                  onClick={() => toggleSlider("plus")}
                  className="slider-rooms-control-btn"
                >
                  &gt;
                </button>

                <ul className="slider-rooms__dots-list">
                  {[0, 1, 2, 3].map((dot) => (
                    <li
                      key={dot}
                      className={classNames("slider-rooms__dots-item", {
                        isActiveDot: dot === roomSlide,
                      })}
                    >
                      <button onClick={() => setRoomSlide(dot)}></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App

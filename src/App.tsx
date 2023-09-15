import { useEffect, useState } from "react";
import "./App.scss";
import classNames from "classnames";
import SimpleSliderL from "./components/SliderLarge";
import AOS from "aos";
import "aos/dist/aos.css";
import { SliderDots } from "./components/SliderDots";
import { SliderMobile } from "./components/SliderMobile";
import { products } from "./components/helper/products";
import { Product } from "./types/Product";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOrder, setHasOrder] = useState(0);
  const [roomSlide, setRoomSlide] = useState(0);
  const [tipsSlide, setTipsSlide] = useState(0);
  const [isCartList, setIsCartList] = useState(false);
  const [isFavoriteList, setIsFavoriteList] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [favorite, setFavorite] = useState<Product[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (roomSlide === 4) {
      setRoomSlide(0);
    }

    const interval = setInterval(() => {
      setRoomSlide(roomSlide + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [roomSlide]);

  useEffect(() => {
    if (tipsSlide === 4) {
      setTipsSlide(0);
    }

    const interval = setInterval(() => {
      setTipsSlide(tipsSlide + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [tipsSlide]);

  const toggleSlider = (sign: string) => {
    if (roomSlide + 1 > 3 && sign === "plus") {
      return setRoomSlide(0);
    }

    if (sign === "plus") {
      setRoomSlide(roomSlide + 1);
    }
  };

  const toggleSliderTips = (sign: string) => {
    if (tipsSlide + 1 > 3 && sign === "plus") {
      return setTipsSlide(0);
    }

    if (sign === "plus") {
      setTipsSlide(tipsSlide + 1);
    }

    if (tipsSlide - 1 < 0 && sign === "minus") {
      return setTipsSlide(3);
    }

    if (sign === "minus") {
      setTipsSlide(tipsSlide - 1);
    }
  };

  const handleMouseEnter = (id: number) => {
    setHasOrder(id);
  };

  const handleMouseLeave = () => {
    setHasOrder(0);
  };

  const addToCart = (id: number) => {
    const currentProduct = products.find((p) => +p.id === id);
    const hasCurrentProduct = cart.find((p) => +p.id === id);

    if (hasCurrentProduct) {
      return;
    }

    if (currentProduct) {
      setCart((prev) => [...prev, currentProduct]);
    }
  };

  const deleteFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => +p.id !== id));
  };

  const addToFavorite = (id: number) => {
    const currentProduct = products.find((p) => +p.id === id);
    const hasCurrentProduct = favorite.find((p) => +p.id === id);

    if (hasCurrentProduct) {
      return;
    }

    if (currentProduct) {
      setFavorite((prev) => [...prev, currentProduct]);
    }
  };

  const deleteFromFavorite = (id: number) => {
    setFavorite((prev) => prev.filter((p) => +p.id !== id));
  };

  const openCartList = (isCartList: boolean) => {
    setIsCartList(!isCartList);
    setIsFavoriteList(false);
  }

  const openFavoriteList = (isFavoriteList: boolean) => {
    setIsCartList(false);
    setIsFavoriteList(!isFavoriteList);
  }

  return (
    <div className="App">
      {scrollPosition > 99 && (
        <div
          className="header__nav header__nav-fixed"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <nav className="nav">
            <ul className="nav__list-menu">
              <li className="nav__item-menu">
                <a href="#header">
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
                <a href="#header">
                  <img src="img/svg/Funiro.svg" alt="arrow" />
                </a>
              </li>

              <li className="nav__item">
                <a href="#products">
                  Products
                  <img
                    src="img/svg/Arrow-down.svg"
                    alt="arrow"
                    className="nav__img"
                  />
                </a>
              </li>

              <li className="nav__item">
                <a href="#tips">
                  Rooms
                  <img
                    src="img/svg/Arrow-down.svg"
                    alt="arrow"
                    className="nav__img"
                  />
                </a>
              </li>

              <li className="nav__item">
                <a href="#inspirations">Inspirations</a>
              </li>

              <li className="nav__item">
                <img src="img/svg/Ellipse.svg" alt="search" />
                <input type="text" placeholder="Search for minimalist chair" />
              </li>
            </ul>
          </nav>

          <div className="nav-bar">
            <ul className="nav-bar__list">
              <li className="nav-bar__item">
                <button onClick={() => openFavoriteList(isFavoriteList)}>
                  <img src="img/svg/Heart.svg" alt="liked" />
                  {favorite.length > 0 && (
                    <span className="nav-bar__item-cart">
                      {favorite.length}
                    </span>
                  )}
                </button>
              </li>

              <li className="nav-bar__item">
                <button onClick={() => openCartList(isCartList)}>
                  <img src="img/svg/Cart.svg" alt="cart" />
                  {cart.length > 0 && (
                    <span className="nav-bar__item-cart">{cart.length}</span>
                  )}
                </button>
              </li>

              <li className="nav-bar__item">
                <a href="#header">
                  <img src="img/Ellipse2.png" alt="cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <header className="header" id="header">
        <ul
          className={classNames("nav-bar__item-cart-list", {
            "nav-bar__item-cart-list-active": isCartList,
          })}
        >
          {isCartList && cart.map((product) => (
                <li key={product.id}>
                  {product.title}
                  <button onClick={() => deleteFromCart(+product.id)}>X</button>
                </li>
              ))}
        </ul>

        <ul
          className={classNames("nav-bar__item-cart-list", {
            "nav-bar__item-cart-list-active": isFavoriteList,
          })}
        >
          {isFavoriteList && favorite.map((product) => (
                <li key={product.id}>
                  {product.title}
                  <button onClick={() => deleteFromFavorite(+product.id)}>X</button>
                </li>
              ))}
        </ul>
        <div className="container">
          <div className="header__inner">
            <div
              className="header__nav"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <nav
                className="nav"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <ul className="nav__list-menu">
                  <li className="nav__item-menu">
                    <a href="#header">
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
                    <a href="#header">
                      <img src="img/svg/Funiro.svg" alt="arrow" />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="#products">
                      Products
                      <img
                        src="img/svg/Arrow-down.svg"
                        alt="arrow"
                        className="nav__img"
                      />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="#tips">
                      Rooms
                      <img
                        src="img/svg/Arrow-down.svg"
                        alt="arrow"
                        className="nav__img"
                      />
                    </a>
                  </li>

                  <li className="nav__item">
                    <a href="#inspirations">Inspirations</a>
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

              <div
                className="nav-bar"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <ul className="nav-bar__list">
                  <li className="nav-bar__item">
                    <button onClick={() => openFavoriteList(isFavoriteList)}>
                      <img src="img/svg/Heart.svg" alt="liked" />
                      {favorite.length > 0 && (
                        <span className="nav-bar__item-cart">
                          {favorite.length}
                        </span>
                      )}
                    </button>
                  </li>

                  <li className="nav-bar__item">
                    <button onClick={() => openCartList(isCartList)}>
                      <img src="img/svg/Cart.svg" alt="cart" />
                      {cart.length > 0 && (
                        <span className="nav-bar__item-cart">
                          {cart.length}
                        </span>
                      )}
                    </button>
                  </li>

                  <li className="nav-bar__item">
                    <a href="#header">
                      <img src="img/Ellipse2.png" alt="cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="header__content"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="header__info">
                <h1>High-Quality Furniture Just For You</h1>
                <p>
                  Our furniture is made from selected and best quality materials
                  that are suitable for your dream home
                </p>
                <button className="button">Shop Now</button>
              </div>
            </div>

            <div className="header__slider">
              <SliderMobile></SliderMobile>
            </div>

            <div className="slider-large">
              <SimpleSliderL></SimpleSliderL>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="advantages">
          <div className="container">
            <div className="advantages__inner">
              <ul className="advantages__list">
                <li
                  className="advantages__item"
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  <img src="img/svg/cup.svg" alt="cup" />
                  <div>
                    <h1>High Quality</h1>
                    <p>crafted from top materials</p>
                  </div>
                </li>

                <li
                  className="advantages__item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <img src="img/svg/ok.svg" alt="ok" />
                  <div>
                    <h1>Warrany Protection</h1>
                    <p>Over 2 years</p>
                  </div>
                </li>

                <li
                  className="advantages__item"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <img src="img/svg/gift.svg" alt="gift" />
                  <div>
                    <h1>Free Shipping</h1>
                    <p>Order over 150 $</p>
                  </div>
                </li>

                <li
                  className="advantages__item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
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

        <section className="products" id="products">
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
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      {+id === hasOrder && (
                        <div className="products__hover">
                          <button
                            className="products__add"
                            onClick={() => addToCart(+id)}
                          >
                            Add to cart
                          </button>
                          <div>
                            <button className="products__share">
                              <img src="img/svg/share.svg" alt="share" />
                              <p>Share</p>
                            </button>
                            <button className="products__like" onClick={() => addToFavorite(+id)}>
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

        <section className="inspiration" id="inspirations">
          <div className="container">
            <div className="inspiration__inner">
              <div
                className="inspiration__info"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
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
                      <div
                        className="slider-rooms__item-price"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
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
                      <div
                        className="slider-rooms__item-price"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
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
                      <div
                        className="slider-rooms__item-price"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
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
                      <div
                        className="slider-rooms__item-price"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
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
                  <img src="img/rightOrange.svg" alt="arrow" />
                </button>
                <SliderDots
                  classForList={"slider-rooms__dots-list"}
                  classForItem={"slider-rooms__dots-item"}
                  setSlide={setRoomSlide}
                  slide={roomSlide}
                ></SliderDots>
              </div>
            </div>
          </div>
        </section>

        <section className="tips" id="tips">
          <div className="container">
            <div className="tips__inner">
              <h1 className="tips__title">Tips & Tricks</h1>

              <ul className="tips__list">
                <div className="tips__control">
                  <button onClick={() => toggleSliderTips("minus")}>
                    &#8249;
                  </button>
                  <button onClick={() => toggleSliderTips("plus")}>
                    &#8250;
                  </button>
                </div>
                <li
                  className="tips__item"
                  style={{
                    transform: `translate(${
                      tipsSlide > 0
                        ? 1696 - Number(`${tipsSlide * 424}`)
                        : -tipsSlide
                    }px)`,
                  }}
                >
                  <img src="img/tips/tips1.png" alt="tips" />
                  <div
                    className={classNames("tips__item-info", {
                      "tips__item-info-active": tipsSlide === 0,
                    })}
                  >
                    <h1>How to create a living room to love</h1>
                    <p>20 jan 2020</p>
                  </div>
                </li>

                <li
                  className="tips__item"
                  style={{
                    transform: `translate(${
                      tipsSlide > 1
                        ? 1696 - Number(`${tipsSlide * 424}`)
                        : -Number(`${tipsSlide * 424}`)
                    }px)`,
                  }}
                >
                  <img src="img/tips/tips2.png" alt="tips" />
                  <div
                    className={classNames("tips__item-info", {
                      "tips__item-info-active": tipsSlide === 1,
                    })}
                  >
                    <h1>Solution for clean look working space</h1>
                    <p>10 jan 2020</p>
                  </div>
                </li>

                <li
                  className="tips__item"
                  style={{
                    transform: `translate(${
                      tipsSlide > 2
                        ? 1696 - Number(`${tipsSlide * 424}`)
                        : -Number(`${tipsSlide * 424}`)
                    }px)`,
                  }}
                >
                  <img src="img/tips/tips3.png" alt="tips" />
                  <div
                    className={classNames("tips__item-info", {
                      "tips__item-info-active": tipsSlide === 2,
                    })}
                  >
                    <h1>Make your cooking activity more fun with good setup</h1>
                    <p>20 jan 2020</p>
                  </div>
                </li>

                <li
                  className="tips__item"
                  style={{
                    transform: `translate(-${tipsSlide * 424}px)`,
                  }}
                >
                  <img src="img/tips/tips4.png" alt="tips" />
                  <div
                    className={classNames("tips__item-info", {
                      "tips__item-info-active": tipsSlide === 3,
                    })}
                  >
                    <h1>Solution for clean look working space</h1>
                    <p>10 jan 2020</p>
                  </div>
                </li>
              </ul>

              <SliderDots
                classForList={"tips__dots-list"}
                classForItem={"tips__dots-item"}
                setSlide={setTipsSlide}
                slide={tipsSlide}
              ></SliderDots>
            </div>
          </div>
        </section>

        <section className="furniture">
          <div className="container">
            <div className="furniture__inner">
              <h2>Share your setup with</h2>
              <h1>#FuniroFurniture</h1>
              <div className="gallery">
                <img
                  src="img/photo1.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="200"
                />
                <img
                  src="img/photo2.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="400"
                />
                <img
                  src="img/photo3.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="600"
                />
                <img
                  src="img/photo4.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="800"
                />
                <img
                  src="img/photo5.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <img
                  src="img/photo6.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <img
                  src="img/photo7.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                />
                <img
                  src="img/photo8.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                />
                <img
                  src="img/photo9.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <ul
              className="footer__list"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              <li className="footer__item">
                <a href="#header">
                  Funiro.
                </a>
              </li>
              <li className="footer__item">
                Worldwide furniture store since 2020. We sell over 1000+ branded
                products on our website
              </li>
              <li className="footer__item">
                <a href="https://goo.gl/maps/gxUXUHeqXTeFJc598" target="blank">
                  Sawojajar Malang, Indonesia
                </a>
              </li>

              <li className="footer__item">
                <a href="tel: +62894563455" target="blank">
                  +6289 456 3455
                </a>
              </li>

              <li className="footer__item">
                <a href="www.funiro.com" target="blank">
                  www.funiro.com
                </a>
              </li>
            </ul>

            <ul
              className="footer__list"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              <li className="footer__item">Menu</li>
              <li className="footer__item">
                <a href="#products">
                  Products
                </a>
              </li>
              <li className="footer__item">
                <a href="#tips">
                  Rooms
                </a>
              </li>
              <li className="footer__item">
                <a href="#inspirations">
                  Inspirations
                </a>
              </li>
              <li className="footer__item">
                <a href="#header">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#header">
                  Terms & Policy
                </a>
              </li>
            </ul>

            <ul
              className="footer__list"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <li className="footer__item">Account</li>
              <li className="footer__item">
                <a href="#header">
                  My Account
                </a>
              </li>
              <li className="footer__item">
                <a href="#header">
                  Checkout
                </a>
              </li>
              <li className="footer__item">
                <a href="#header">
                  My Cart
                </a>
              </li>
              <li className="footer__item">
                <a href="#header">
                  My catalog
                </a>
              </li>
            </ul>

            <ul
              className="footer__list"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <li className="footer__item">Stay Connected</li>
              <li className="footer__item">
                <a href="https://www.facebook.com/" target="blank">
                  Facebook
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.instagram.com/" target="blank">
                  Instagram
                </a>
              </li>
              <li className="footer__item">
                <a href="https://twitter.com/" target="blank">
                  Twitter
                </a>
              </li>
            </ul>

            <ul
              className="footer__list"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <li className="footer__item">Stay Updated</li>
              <li className="footer__item">
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                  <button type="submit">
                    <img src="img/submit.svg" alt="" />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

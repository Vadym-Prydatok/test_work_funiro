export const Menu = () => {
  return (
    <ul className="menu__list">
      <li className="menu__item">
        <a href="/">
          <img src="img/svg/Funiro.svg" alt="arrow" />
        </a>
      </li>

      <li className="menu__item">
        <a href="/">
          Products
          <img src="img/svg/Arrow-down.svg" alt="arrow" className="nav__img" />
        </a>
      </li>

      <li className="menu__item">
        <a href="/">
          Rooms
          <img src="img/svg/Arrow-down.svg" alt="arrow" className="nav__img" />
        </a>
      </li>

      <li className="menu__item">
        <a href="/">Inspirations</a>
      </li>

      <li className="menu__item">
        <img src="img/svg/Ellipse.svg" alt="search" />
        <input type="text" placeholder="Search for minimalist chair" />
      </li>
    </ul>
  );
};

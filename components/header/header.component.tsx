import Link from 'next/link';
import sprite from '../../assets/icon-sprite.svg';

import './header.styles.scss';

export default () => {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="navigation">
          <input
            type="checkbox"
            id="nav-toggle"
            className="navigation__checkbox"
          />
          <label htmlFor="nav-toggle" className="navigation__button">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </label>

          <div className="navigation__menu">
            <ul className=" category-list category-list--menu">
              <li className=" category-list__item--menu">
                <a className="category-list__link" href="/">
                  Кроссовки
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Худи
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Толстовки
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Ввойти
                </a>
              </li>
            </ul>
          </div>
          {/* </nav> */}

          <div className="header__logo-box">
            <div>
              <Link href="/">
                <img src="/logo.png" className="logo" />
              </Link>
            </div>

            <div className="header__contacts">
              <a href="https://www.instagram.com/nocap_exclusive/">
                <span className="contacts__instagram">@nocap_exclusive</span>
              </a>
            </div>
          </div>

          <div className="header__nav">
            <ul className="category-list">
              <li className="category-list__item">
                <a className="category-list__link" href="/">
                  Кроссовки
                </a>
              </li>

              <li className="category-list__item">
                <a className="category-list__link" href="/">
                  Худи
                </a>
              </li>

              <li className="category-list__item">
                <a className="category-list__link" href="/">
                  Толстовки
                </a>
              </li>
            </ul>
          </div>

          <div className="header__cta">
            <div className="header__nav-item" id="info-nav">
              <svg className="icon">
                <use href={sprite + '#info'} />
              </svg>
            </div>

            <div className="header__nav-item " id="user-nav">
              <svg className="icon">
                <use href={sprite + '#user'} />
              </svg>
            </div>

            <div className="header__nav-item" id="card-nav">
              <svg className="icon">
                <use href={sprite + '#cart'} />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

{
  /* <nav className="navigation">
          <input
            type="checkbox"
            id="nav-toggle"
            className="navigation__checkbox"
          />
          <label htmlFor="nav-toggle" className="navigation__button">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </label>

          <div className="navigation__menu">
            <ul className=" category-list category-list--menu">
              <li className=" category-list__item--menu">
                <a className="category-list__link" href="/">
                  Кроссовки
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Худи
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Толстовки
                </a>
              </li>

              <li className="  category-list__item--menu">
                <a className="category-list__link" href="/">
                  Ввойти
                </a>
              </li>
            </ul>
          </div>
        </nav> */
}

import './about.styles.scss';
import sprite from '../../assets/icon-sprite.svg';

export default () => (
  <section className="about-section">
    <div className="about-section-inner">
      <div className="promo-banner">
        <div className="promo-banner__item">
          <svg className="promo-banner__icon">
            <use href={sprite + '#van'} />
          </svg>
          <div className="promo-banner__info">
            <h1 className="promo-banner__title">доставка по всему миру</h1>
            {/* <p className="promo-banner__subtitle">
              Мы осуществляем доставку Ваших заказов в любую точку мира
            </p> */}
          </div>
        </div>
        <div className="promo-banner__item">
          <svg className="promo-banner__icon">
            <use href={sprite + '#product'} />
          </svg>
          <div className="promo-banner__info">
            <h1 className="promo-banner__title">UA качество</h1>
            {/* <p className="promo-banner__subtitle">
              Идентична оригиналам продукция, поскольку они производятся на тех
              же фабриках (с использованием тех же точных материалов)
            </p> */}
          </div>
        </div>
        <div className="promo-banner__item">
          <svg className="promo-banner__icon">
            <use href={sprite + '#brilliant'} />
          </svg>
          <div className="promo-banner__info">
            <h1 className="promo-banner__title">Эксклюзивные вещи</h1>
            {/* <p className="promo-banner__subtitle">
              Только у нас вы найдете такие вещи
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

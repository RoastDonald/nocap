import './card-preview.styles.scss';
import sprite from '../../assets/icon-sprite.svg';

type Props = {
  imageURL: string;
  title: string;
  desc: string;

  categoryName: string;
};
export default ({ imageURL, title, desc, categoryName }: Props) => (
  <div className="card">
    <div className="card__container">
      <div className="card__info">
        <img src={imageURL} alt="adidas" className="card__image-bg" />
        <div className="card__meta">
          <img
            src={imageURL}
            alt={title}
            className="card__preview"
            width="80px"
            height="auto"
          />
          <div className="card__about">
            <span className="card__title">{title}</span>
            <span className="card__desc">{desc}</span>
          </div>
        </div>
      </div>
      <div className="card__cta">
        <button className="card-btn">
          <span className="btn-title">{categoryName}</span>
          <svg className="card__btn-icon">
            <use href={sprite + '#arrow'} />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

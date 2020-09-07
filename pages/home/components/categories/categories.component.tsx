import './categories.styles.scss';
import CardPreview from '../../../../components/card-preview/card-preview.component';

export default () => {
  return (
    <section className="categories-section">
      <div className="categories-section-inner">
        <div className="title-container">
          <h1 className="categories-section__title">Выбирай по вкусу</h1>
        </div>
        <div className="categories-section__categories">
          <CardPreview
            title="Adidas"
            desc="YEEZY BOOST 350v2"
            imageURL="/card-1.png"
            categoryName="Кроссовки"
          />

          <CardPreview
            title="Kenzo Hoodie"
            desc=""
            imageURL="/card-2.jpg"
            categoryName="Худи"
          />
          <CardPreview
            title="PALM ANGELES"
            desc=""
            imageURL="/card-3.jpg"
            categoryName="Футболки"
          />
        </div>
      </div>
    </section>
  );
};

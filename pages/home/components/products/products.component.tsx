import './products.styles.scss';
export default () => {
  return (
    <section className="products-section">
      <div className="products-section-inner">
        <div className="title-container ">
          <h1 className="heading-1 products-section__title">
            Рекомендуем к покупке
          </h1>
        </div>
        <div className="products-section__content"></div>
      </div>
    </section>
  );
};

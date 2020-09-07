import Slider from '../../../../components/carousel/carousel.component';

import './hero.styles.scss';

export default () => {
  return (
    <section className="hero-section">
      <div className="hero-section-inner">
        <div className="slider-container">
          <Slider
            slides={['/slider-1.jpg', '/slider-2.jpg', '/slider-3.jpg']}
          />
        </div>
        <div className="scroll-indicator">
          <div className="scroll-indicator__arrow"></div>
        </div>
      </div>
    </section>
  );
};

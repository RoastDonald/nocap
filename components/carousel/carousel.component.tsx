import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
} from 'pure-react-carousel';
import { connect } from 'react-redux';
import sprite from '../../assets/icon-sprite.svg';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.styles.scss';
import { rootReducerType } from '../../redux/root-reducer';
import { keys } from '../../breakpoints';
type Props = {
  slides: string[];
} & ReturnType<typeof mapStateToProps>;
const DEFAULT_CAROUSEL_WIDTH = 30;

const Carousel = ({ slides, deviceWidthType }: Props) => {
  const breakpoints: { [key in keys]: number } = {
    phone: 30,
    phone_lg: 25,
    phone_landscape: 22,
    ipad: 20,
    ipad_pro: 15,
    desktop: 12,
  };

  return (
    <CarouselProvider
      naturalSlideWidth={DEFAULT_CAROUSEL_WIDTH}
      naturalSlideHeight={breakpoints[deviceWidthType]}
      totalSlides={slides.length}
    >
      <Slider>
        {slides.map((e, i) => (
          <Slide index={i} key={i}>
            <Image
              hasMasterSpinner={false}
              src={e}
              className="carousel__image"
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="carousel__btn">
        <svg className="btn-icon btn-icon--slider">
          <use href={sprite + '#arrow'} />
        </svg>
      </ButtonBack>
      <ButtonNext className="carousel__btn">
        <svg className="btn-icon btn-icon--slider">
          <use href={sprite + '#arrow'} />
        </svg>
      </ButtonNext>
      <DotGroup />
    </CarouselProvider>
  );
};

const mapStateToProps = (state: rootReducerType) => ({
  deviceWidthType: state.meta.deviceWidthType,
});

export default connect(mapStateToProps)(Carousel);

import React, {FC} from 'react';
import styles from './Slider.module.scss';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';
import cn from "classnames";

export interface ISlide {
    image: string;
    alt: string;
}

export interface ISlider {
    slides: ISlide[];
}

const Slider:FC<ISlider> = ({slides}) => {
    const [current, setCurrent] = React.useState<number>(0),
           length = slides.length;

  const renderingSlides = slides.map((slide, index) => (
        <div>
            <img
                src={slide.image}
                alt={slide.alt}
                className={cn(styles.slider__image)}
            />
        </div>
      )
  )

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    return (
    <section className={cn(styles.slider)}>
        <img
            className={cn(styles.left_arrow)}
            src={leftArrow}
            alt={"left-arrow"}
            onClick={prevSlide}
        />
        <img
            className={cn(styles.right_arrow)}
            src={rightArrow}
            alt={"right-arrow"}
            onClick={nextSlide}
        />
        {renderingSlides}
    </section>
  )
}

export default Slider

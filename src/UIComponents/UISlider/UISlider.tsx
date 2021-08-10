import React, {FC} from 'react';
// @ts-ignore
import Slider from 'react-animated-slider';
// @ts-ignore
import 'react-animated-slider/build/horizontal.css';

import styles from './UISlider.module.scss';
import './UISlider.module.scss';
import 'animate.css';

import cn from "classnames";
import Container from "../Container/Container";
import {ISlider} from "./IUISlider";

const UISlider:FC<ISlider> = (
    {
        slides,
    }) => {
    const [slideNum, setSlideNum] = React.useState<number>(0);

    const classNames = {
        previousButton: styles.myPreviousButton,
        nextButton: styles.myNextButton,
        // slide: styles.mySlide,
        slider: styles.mySlider,
    }

    React.useEffect(() => {
        console.log(slideNum);
        const title = document.querySelector('#promo_title'),
              subTitle = document.querySelector('#promo_subtitle');

        title && title.classList.add("animate__animated");
        title && title.classList.add("animate__fadeInDown");

        subTitle && subTitle.classList.add("animate__animated");
        subTitle && subTitle.classList.add("animate__bounceInUp");
        // return () => {
        //     title && title.classList.remove("animate__animated");
        //     title && title.classList.remove("animate__fadeInDown");
        //
        //     subTitle && subTitle.classList.remove("animate__animated");
        //     subTitle && subTitle.classList.remove("animate__bounceInUp");
        // }
    },[slideNum])

    const handleCountNums = (index: number) => {
        setSlideNum(index);
    }

    let renderingNumbers = ['01', '02', '03'].map((item,index) => (
        <div
            className={cn(styles.slideCounters__number, {
                [styles.slideCounters__number_active]: index === slideNum
            })}
            key={index}
            onClick={() => handleCountNums(index)}
        >{item}</div>
    ));


    const renderingSlides = slides.map((slide, index) => {
        const {title, subtitle, image, btn} = slide;
        return (
                <div
                    key={index}
                    style={{ background: `url('${image}') no-repeat center center`, backgroundSize: 'cover'}}
                >
                    <Container>
                        <div className={styles.title__wrapper}>
                            <h1 id={'promo_title'}>{title}</h1>
                            <h2 id={'promo_subtitle'} className={cn(styles.subtitle)}>{subtitle}</h2>
                            {btn}
                        </div>
                        <div className={styles.slideCounters__wrapper}>
                            {/*{renderingNumbers}*/}
                        </div>
                    </Container>
                </div>
            );
        }
    )

  return (
      <>
          <Slider
            classNames={classNames}
            onSlideChange={(e: { slideIndex: React.SetStateAction<number> }) => setSlideNum(e.slideIndex)}
            // autoplay={1000}
            >
                {renderingSlides}
            </Slider>
          {/*{renderingNumbers}*/}
      </>
  )
}

export default UISlider;

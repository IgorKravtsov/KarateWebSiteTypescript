import React, {FC} from 'react';
// @ts-ignore
import Slider from 'react-animated-slider';
// @ts-ignore
import 'react-animated-slider/build/horizontal.css';

import styles from './UISlider.module.scss';
import './UISlider.module.scss';

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

    const handleCountNums = () => {
        console.log(slideNum);
    }

    let renderingNumbers = ['01', '02', '03'].map((item,index) => (
        <div
            className={cn(styles.slideCounters__number, {
                [styles.slideCounters__number_active]: index === 0
            })}
            key={index}
            onClick={handleCountNums}
        >{item}</div>
    ));


    React.useEffect(() => {
        renderingNumbers = ['01', '02', '03'].map((item,index) => {
            console.log("Index: ", index);
            return (
                <div
                    className={cn(styles.slideCounters__number, {
                        [styles.slideCounters__number_active]: index === slideNum
                    })}
                    key={index}
                >{item}</div>
            )})
        console.log("State: ", slideNum);
    }, [slideNum])



    const renderingSlides = slides.map((slide, index) => {
        const {title, subtitle, image, btn} = slide;
        return (
                <div
                    key={index}
                    style={{ background: `url('${image}') no-repeat center center`, backgroundSize: 'cover'}}
                >
                    <Container>
                        <div className={styles.title__wrapper}>
                            <h1>{title}</h1>
                            <h2 className={styles.subtitle}>{subtitle}</h2>
                            {btn}
                        </div>
                        <div className={styles.slideCounters__wrapper}>
                            {renderingNumbers}
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
            onSlideChange={(e: { slideIndex: React.SetStateAction<number>; }) => setSlideNum(e.slideIndex)}
            // autoplay={1000}
            >
                {renderingSlides}
            </Slider>
      </>
  )
}

export default UISlider;

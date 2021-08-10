import React, {useRef} from 'react'
import Section from "../Section/Section";
import Caption from "../../../UIComponents/Caption/Caption";
import styles from './instractorsSection.module.scss';
import cn from "classnames";
import Card from "../../../UIComponents/Card/Card";
import {socialNetworks} from "../../../AdditionalData";
import Container from "../../../UIComponents/Container/Container";
import background from './our_instractors_background.png';
import {useScrolledEffect} from "../../../hooks/useScrolledEffect";

const InstractorsSection = () => {
    const animatedClasses = "animate__animated";
    const ref = useRef<HTMLDivElement>(null);
    const scrolled = useScrolledEffect(ref, 400);

  return (
    <Section classes={styles.section} background={background}>
        <Container>
            <Caption
                view={"center"}
                dividerView={"short"}
                classes={cn({[`${animatedClasses} animate__zoomIn`]: scrolled})}
            >Наши <span><strong>инструктора</strong></span></Caption>
            <div ref={ref} className={cn(styles.instractors__wrapper)}>
                <Card img={process.env.PUBLIC_URL + '/img/photos/Yurii_Evgenievich.jpeg'}
                      classes={"card"}
                      title={"Сотников Юрий Евгеньевич"}
                      subtitle={"сенсей, 3 дан"}
                      width={320}
                      socialNetworks={socialNetworks}
                />
                <Card img={process.env.PUBLIC_URL + '/img/photos/Dmitriy_Sergeevich.jpeg'}
                      classes={"card"}
                      title={"Запара Евгений Анатольевич"}
                      subtitle={"сенсей, 4 дан"}
                      width={320}
                      socialNetworks={socialNetworks}
                />
                <Card img={process.env.PUBLIC_URL + '/img/photos/Dmitriy_Sergeevich.jpeg'}
                      classes={"card"}
                      title={"Зайцев Дмитрий Сергеевич"}
                      subtitle={"сенпай, 1 дан"}
                      width={320}
                      socialNetworks={socialNetworks}
                />
            </div>
        </Container>
    </Section>
  )
}

export default InstractorsSection

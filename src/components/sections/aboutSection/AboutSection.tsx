import React from 'react'
import Caption from "../../../UIComponents/Caption/Caption";
import styles from './aboutSection.module.scss';
import photo from './about_img.png';
import Container from "../../../UIComponents/Container/Container";
import cn from "classnames";
import { Link } from 'react-router-dom';
import {useScrolledEffect} from "../../../hooks/useScrolledEffect";
import Section from "../Section/Section";

const AboutSection = () => {

    const ref = React.useRef<HTMLDivElement>(null);
    const scrolled = useScrolledEffect(ref, 900);

    const animationClasses = "animate__animated";

    return (
        <Section classes={styles.section}>
            <Container>
                <div ref={ref} className={styles.about__wrapper}>
                    <img
                        src={photo}
                        alt={"Kyokushin fighter"}
                        className={styles.about__img}
                    />
                    <div>
                        <Caption classes={cn({
                            [`${animationClasses} animate__backInLeft`]: scrolled,
                        })} view={"left"} dividerView={"long"}>Про <span><strong>Киокушинкай</strong></span> карате</Caption>
                        <h3 className={cn(styles.subtitle, {
                            [`${animationClasses} animate__fadeInUpBig`]: scrolled,
                        })}>Это стиль карате, основанный Масутацу Оямой в 1950-х годах</h3>
                        <p className={cn(styles.about__text, {
                            [`${animationClasses} animate__zoomIn`]: scrolled,
                        })}>Стиль Кёкусинкай был создан в противовес множеству бесконтактных школ и самому принципу «карате без
                            контакта». Демонстрируя миру мощь реального карате, Кёкусинкай постепенно завоевал популярность во
                            многих странах, а позже лёг в основу ряда других контактных стилей карате. Для основателя Кёкусинкай
                            Масутацу Оямы смысл всей его подвижнической жизни заключался в возрождении карате как воинского
                            искусства. Провозглашая идеал будо-карате, Ояма решительно отделял всю систему воинского воспитания и
                            практики от спорта, следуя воинским традициям Японии и духу бусидо.</p>
                        <Link to={"/"}><h5 className={styles.about__more}>Читать еще ⎆</h5></Link>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default AboutSection

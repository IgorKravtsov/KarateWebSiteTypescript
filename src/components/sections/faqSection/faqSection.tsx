import React from 'react'
import Section from "../Section/Section";
import styles from './faqSection.module.scss';
import Accordion from "../../../UIComponents/Accordion/Accordion";
import {questionsAnswers} from "../../../AdditionalData";
import picture from './FAQ_background.png';
import Caption from "../../../UIComponents/Caption/Caption";

const FaqSection = () => {
  return (
    <Section classes={styles.section}>
        <div className={styles.faq}>
            <img src={picture} alt={"FAQ answers"} className={styles.img}/>
            <div className={styles.questions__wrapper}>
                <Caption view={"left"} dividerView={"short"} >Часто задаваемые <span>вопросы</span></Caption>
                <Accordion classes={"mt40"} data={questionsAnswers}/>
            </div>
        </div>
    </Section>
  )
}

export default FaqSection

import React, {FC} from 'react'
import cn from "classnames";

import styles from './Accordion.module.scss';
import AccordionItem from "./AccordionItem/AccordionItem";
import {IAccordion} from "./IAccordion";


const Accordion:FC<IAccordion> = (
    {
        data,
        width,
        height,
        classes
    }) => {

    const [activeIndex, setActiveIndex] = React.useState(0);

    const renderedQuestionsAnswers = data.map((item, index) => {
        const isActive = index === activeIndex;
        return (
            <AccordionItem
                key={index}
                item={item}
                index={index}
                isActive={isActive}
                onClick={() => setActiveIndex(index)}
            />
        )
    })
    return (
    <div
        className={cn(styles.accordion__wrapper, classes)}
        style={{width, height}}
    >
        {renderedQuestionsAnswers}
    </div>
  )
}

export default Accordion

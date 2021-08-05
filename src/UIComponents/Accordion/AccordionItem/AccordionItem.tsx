import React, {FC} from 'react';
import styles from './AccordionItem.module.scss';
import cn from "classnames";
import {IAccordionItem} from "./IAccordionItem";



const AccordionItem:FC<IAccordionItem> = ({
        item,
        index,
        isActive,
        onClick
    }) => {
  return (
    <div className={cn(styles.accordion__question)} key={item.question}>
            <button
                aria-expanded={isActive}
                aria-controls={`${index+1}_answer`}
                data-qa={"accordion__question_button"}
                className={cn(styles.accordion__question_button, {
                    [styles.accordion__question_button_active]: isActive
                })}
                onClick={onClick}
            >
                {item.question}
            </button>
            <p
                id={`${index+1}_answer`}
                data-qa={"accordion__answer"}
                className={cn(styles.accordion__answer, {
                    [styles.show]: isActive,
            })}>
                {item.answer}
            </p>
    </div>
  )
}

export default AccordionItem;

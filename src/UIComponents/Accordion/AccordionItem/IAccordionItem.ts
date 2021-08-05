import {IAccordionQuestionAnswer} from "../IAccordion";

export interface IAccordionItem {
    item: IAccordionQuestionAnswer;
    index: number;

    isActive: boolean;
    onClick: () => void;
}
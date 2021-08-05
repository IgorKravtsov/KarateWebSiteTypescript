export interface IAccordionQuestionAnswer {
    question: string;
    answer: string;
}

export interface IAccordion {
    data: IAccordionQuestionAnswer[];
    width?: number | string;
    height?: number;
    classes?: string;
}

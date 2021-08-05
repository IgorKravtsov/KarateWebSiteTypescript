import {ISocialNetWork} from "./UIComponents/Card/ICard";
import React from "react";
import {IAccordionQuestionAnswer} from "./UIComponents/Accordion/IAccordion";
import {ISlide} from "./UIComponents/UISlider/IUISlider";
import LinkButton from "./UIComponents/LinkButton/LinkButton";
import Caption from "./UIComponents/Caption/Caption";

export const socialNetworks: ISocialNetWork[] = [
    {
        svgElement: <svg width="36" height="36" viewBox="0 0 36 36" fill="#E43D4E" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.1308 1.54688H11.835C6.17723 1.54688 1.61719 6.10755 1.61719 11.7392V23.9792C1.61719 29.6112 6.17723 34.2422 11.835 34.2422H24.1308C29.7886 34.2422 34.4531 29.6112 34.4531 23.9792V11.7392C34.4531 6.10755 29.7886 1.54688 24.1308 1.54688ZM31.3594 23.9792C31.3594 27.9158 28.0855 31.1484 24.1308 31.1484H11.835C7.87999 31.1484 4.64062 27.9158 4.64062 23.9792V11.7392C4.64062 7.80279 7.87999 4.57031 11.835 4.57031H24.1308C28.0855 4.57031 31.3594 7.80279 31.3594 11.7392V23.9792Z" fill="url(#paint0_linear)"/>
        <path d="M17.9827 9.69934C13.4559 9.69934 9.78564 13.3528 9.78564 17.8595C9.78564 22.3654 13.4559 26.0189 17.9827 26.0189C22.5097 26.0189 26.1798 22.3654 26.1798 17.8595C26.1798 13.3528 22.5097 9.69934 17.9827 9.69934ZM17.9827 22.9592C15.1587 22.9592 12.8598 20.6704 12.8598 17.8595C12.8598 15.0458 15.1587 12.7594 17.9827 12.7594C20.8066 12.7594 23.1058 15.0459 23.1058 17.8595C23.1058 20.6704 20.8066 22.9592 17.9827 22.9592Z" fill="url(#paint1_linear)"/>
        <path d="M26.7947 8.00012C26.1913 8.00012 25.7021 8.48697 25.7021 9.08737C25.7021 9.68783 26.1913 10.1749 26.7947 10.1749C27.3975 10.1749 27.8868 9.68783 27.8868 9.08737C27.8868 8.48697 27.3975 8.00012 26.7947 8.00012Z" fill="url(#paint2_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="4.63386" y1="31.2523" x2="31.3845" y2="4.50162" gradientUnits="userSpaceOnUse">
        <stop offset="0.9944" stop-color="#E43D4E"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="12.1999" y1="23.6422" x2="23.7658" y2="12.0763" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E43D4E"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="26.0239" y1="9.85807" x2="27.5651" y2="8.3169" gradientUnits="userSpaceOnUse">
        <stop offset="0.9944" stop-color="#E43D4E"/>
            </linearGradient>
            </defs>
            </svg>,
        to: "/",
    },
    {
        svgElement: <svg width="34" height="34" viewBox="0 0 34 34" fill="#E43D4E" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1605 34H1.87664C0.839906 34 0 33.1596 0 32.1234V1.87664C0 0.839906 0.839906 0 1.87664 0H32.1236C33.1598 0 34 0.839906 34 1.87664V32.1234C34 33.1598 33.1598 34 32.1236 34H23.4595V20.8332H27.8789L28.5406 15.7019H23.4595V12.4259C23.4595 10.9403 23.872 9.928 26.0023 9.928L28.7194 9.92694V5.33747C28.2495 5.27505 26.6366 5.13533 24.76 5.13533C20.8423 5.13533 18.1602 7.52675 18.1602 11.9181V15.7022H13.7296V20.8335H18.1605V34Z"/>
        </svg>,
        to: "/",
    },
];

export const questionsAnswers: IAccordionQuestionAnswer[] = [
    {
        question: "How many team members can I invite?",
        answer:
            "Для засновника Кіокушинкай Масутацу Оями сенс усього його подвижницького життя полягав у відродженні карате як воєнного мистецтва. Проголошуючи ідеал будо-карате, Ояма рішуче відділяв усю систему військового виховання і практики від спорту, слідуючи військовим традиціям Японії і духу бусідо.",
    },
    {
        question: "What is the maximum file upload size?",
        answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        question: "How do I reset my password?",
        answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
        question: "Can I cancel my subscription?",
        answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
        question: "Do you provide additional support?",
        answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
];

export const slides: ISlide[] = [
    {
        title: <Caption view={"left"} dividerView={"long"} h1={true}>
            Добро пожаловать в <span><strong>школу карате</strong></span> киокушинкай
        </Caption>,
        subtitle: "Для засновника Кіокушинкай Масутацу Оями сенс Масутацу Оями сенс",
        btn: <LinkButton to={'/'} classes={"fz22"}>Записаться на бесплатную тренировку</LinkButton>,
        image: process.env.PUBLIC_URL + "/img/sliderImages/promo_background1.jpg",

    },
    {
        title: <Caption view={"left"} dividerView={"long"} h1={true}>
            Добро пожаловать в <span><strong>школу карате</strong></span> киокушинкай
        </Caption>,
        subtitle: "Для засновника Кіокушинкай Масутацу Оями сенс Масутацу Оями сенс",
        btn: <LinkButton to={'/'} classes={"fz22"}>Записаться на бесплатную тренировку</LinkButton>,
        image: process.env.PUBLIC_URL + "/img/sliderImages/promo_background.jpg",
    },
    {
        title: <Caption view={"left"} dividerView={"long"} h1={true}>
            Добро пожаловать в <span><strong>школу карате</strong></span> киокушинкай
        </Caption>,
        subtitle: "Для засновника Кіокушинкай Масутацу Оями сенс Масутацу Оями сенс",
        btn: <LinkButton to={'/'} classes={"fz22"}>Записаться на бесплатную тренировку</LinkButton>,
        image: process.env.PUBLIC_URL + "/img/sliderImages/promo_background2.jpg",
    },
]
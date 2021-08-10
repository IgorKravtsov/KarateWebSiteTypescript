import React from 'react';
import LinkButton from "../../UIComponents/LinkButton/LinkButton";
import styles from './app.module.scss';
import Header from "../header/header";
import Card from "../../UIComponents/Card/Card";
import {socialNetworks} from "../../AdditionalData";
import Container from "../../UIComponents/Container/Container";
import {IAccordionQuestionAnswer} from "../../UIComponents/Accordion/IAccordion";
import Accordion from '../../UIComponents/Accordion/Accordion'
import Caption from "../../UIComponents/Caption/Caption";
import UISlider from "../../UIComponents/UISlider/UISlider";
import {slides, questionsAnswers} from "../../AdditionalData";
import InfoSection from "../sections/infoSection/infoSection";
import {Route, Switch} from "react-router";
import HomePage from "../../pages/homePage/HomePage";


const App = () => {
    return (
        <>
            <div className={styles.app}>
                <Header/>
                <Switch>
                    <Route path={"/"} component={HomePage} exact/>
                </Switch>
                {/*<Footer/>*/}
            </div>
        </>
    );
}

export default App;

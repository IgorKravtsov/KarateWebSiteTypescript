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


const App = () => {
    return (
        <>
            <div className={styles.app}>
                <Header/>
                <UISlider slides={slides}/>
                <Container>
                    {<Accordion data={questionsAnswers}/>}

                    {/*<Caption*/}
                    {/*    view={"center"}*/}
                    {/*    dividerView={"short"}*/}
                    {/*>Часто задаваемые <span>вопросы</span></Caption>*/}

                    <Card img={process.env.PUBLIC_URL + '/img/photos/Dmitriy_Sergeevich.jpeg'}
                          title={"Сотников Юрий Евгеньевич"}
                          subtitle={"сенсей, 3 дан"}
                          width={520}
                          socialNetworks={socialNetworks}
                    />

                    {/*<LinkButton view="filled" to="#">filled1</LinkButton>*/}
                    {/*<LinkButton view="filled" to="#">Записаться на бесплатную тренировку</LinkButton>*/}
                    {/*<LinkButton view="outline" to="#">Связаться с нами</LinkButton>*/}
                </Container>
            </div>
        </>
    );
}

export default App;

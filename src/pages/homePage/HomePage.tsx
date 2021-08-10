import React from 'react'
import UISlider from "../../UIComponents/UISlider/UISlider";
import {slides} from "../../AdditionalData";
import Container from "../../UIComponents/Container/Container";
import AboutSection from "../../components/sections/aboutSection/AboutSection";
import InstractorsSection from "../../components/sections/instractorsSection/instractorsSection";
import FaqSection from "../../components/sections/faqSection/faqSection";

const HomePage = () => {
  return (
      <>
          <UISlider slides={slides}/>
          <AboutSection/>
          <InstractorsSection/>
          <FaqSection/>
          {/*<Container>*/}

              {/*{<Accordion data={questionsAnswers}/>}*/}

              {/*<Caption*/}
              {/*    view={"center"}*/}
              {/*    dividerView={"short"}*/}
              {/*>Часто задаваемые <span>вопросы</span></Caption>*/}

              {/*<Card img={process.env.PUBLIC_URL + '/img/photos/Dmitriy_Sergeevich.jpeg'}*/}
              {/*      title={"Сотников Юрий Евгеньевич"}*/}
              {/*      subtitle={"сенсей, 3 дан"}*/}
              {/*      width={520}*/}
              {/*      socialNetworks={socialNetworks}*/}
              {/*/>*/}

              {/*<LinkButton view="filled" to="#">filled1</LinkButton>*/}
              {/*<LinkButton view="filled" to="#">Записаться на бесплатную тренировку</LinkButton>*/}
              {/*<LinkButton view="outline" to="#">Связаться с нами</LinkButton>*/}


          {/*</Container>*/}
      </>
  )
}

export default HomePage

import React from 'react';
import LinkButton from "../../UIComponents/LinkButton/LinkButton";
import styles from './app.module.scss';
import Header from "../header/header";

const App = () => {

  return (
    <div className={styles.app}>
        <Header/>
        {/*<LinkButton view="filled" to="#">filled1</LinkButton>*/}
        {/*<LinkButton view="filled" to="#">Записаться на бесплатную тренировку</LinkButton>*/}
        {/*<LinkButton view="outline" to="#">Связаться с нами</LinkButton>*/}
    </div>
  );
}

export default App;

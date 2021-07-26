import React from 'react';
import LinkButton from "./UIComponents/LinkButton/LinkButton";
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <LinkButton view="filled" to="#">filled1</LinkButton>
      <LinkButton view="filled" to="#">filled2</LinkButton>
      <LinkButton view="outline" to="#">outlined</LinkButton>
    </div>
  );
}

export default App;

import React from 'react';
import LinkButton from "./UIComponents/LinkButton/LinkButton";

function App() {
  return (
    <div className="App">
      <LinkButton text="filled!" view="filled" to="#"/>
      <LinkButton text="filled2!" view="filled" to="#"/>
      <LinkButton text="outline!" view="outline" to="#"/>
    </div>
  );
}

export default App;

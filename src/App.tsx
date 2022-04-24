import React from 'react';
import { IconContext } from "react-icons";
import { GlobalStyle } from './styles';
import Routes from './Router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: '26px' }}>
        <Routes />
      </IconContext.Provider>
    </div>
  );
}

export default App;
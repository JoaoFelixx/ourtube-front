import React from 'react';
import { GlobalStyle } from './styles';
import Routes from './Router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
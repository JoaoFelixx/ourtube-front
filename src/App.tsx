import { Routes } from 'Router';
import { GlobalStyle } from 'styles';
import { ContextInstance } from 'Context/ContextInstance';

function Application() {
  return (
    <ContextInstance>
      <GlobalStyle />
      <Routes />
    </ContextInstance>
  );
}

export default Application;
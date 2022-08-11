import Routes from 'Router';
import { GlobalStyle } from 'styles';
import { ApplicationProvider } from 'Context/ApplicationContext';

function Application() {
  return (
    <ApplicationProvider>
      <GlobalStyle />
      <Routes />
    </ApplicationProvider>
  );
}

export default Application;
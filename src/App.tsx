import Routes from 'Router';
import { IconContext } from "react-icons";
import { AuthProvider } from 'Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { VideosProvider } from 'Context/VideosProvider';
import { GlobalStyle, iconSettings } from 'styles';

function App() {
  return (
    <VideosProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover />
      <GlobalStyle />
      <IconContext.Provider value={iconSettings}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </IconContext.Provider>
    </VideosProvider>
  );
}

export default App;
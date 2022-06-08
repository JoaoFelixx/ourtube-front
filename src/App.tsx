import { IconContext } from "react-icons";
import { GlobalStyle } from 'styles';
import { AuthProvider } from 'Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { VideosProvider } from 'Context/VideosProvider';
import Routes from 'Router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
      <IconContext.Provider value={{ color: "#000", className: "global-class-name", size: '26px' }}>
        <AuthProvider>
          <VideosProvider>
            <Routes />
          </VideosProvider>
        </AuthProvider>
      </IconContext.Provider>
    </div>
  );
}

export default App;
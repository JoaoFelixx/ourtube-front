import { Provider } from 'interfaces';
import { IconContext } from "react-icons";
import { iconSettings } from 'styles';
import { AuthProvider } from './AuthProvider';
import { UserProvider } from './UserProvider';
import { VideosProvider } from './VideosProvider';
import { ToastContainer } from 'react-toastify';

export function ApplicationProvider({ children }: Provider) {
  return (
    <AuthProvider>
      <UserProvider>
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
          <IconContext.Provider value={iconSettings}>
            {children}
          </IconContext.Provider>
        </VideosProvider>
      </UserProvider>
    </AuthProvider>
  )
}
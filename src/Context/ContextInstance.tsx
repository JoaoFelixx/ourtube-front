import { Provider } from 'interfaces';
import { IconContext } from "react-icons";
import { iconSettings } from 'styles';
import { UserProvider } from './UserProvider';
import { ToastContainer } from 'react-toastify';
import { ApplicationProvider } from './ApplicationProvider';

export function ContextInstance({ children }: Provider) {
  return (
    <UserProvider>
      <ApplicationProvider>
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
      </ApplicationProvider>
    </UserProvider>
  )
}
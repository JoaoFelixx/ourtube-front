import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { api } from 'service';
import { useSelectorAuth } from './AuthProvider';
import { Provider, Enrolled } from 'interfaces';

interface User {
  enrolled: Enrolled[];
  dispatch?: React.Dispatch<Enrolled>;
}

const Context = createContext<User>({ enrolled: [] });

const useSelectorUser = (): User => useContext(Context);

function UserProvider({ children }: Provider) {
  const [enrolled, setEnrolled] = useState<Enrolled[]>([]);
  const { authenticated } = useSelectorAuth();

  const dispatch = useCallback((subscribe: Enrolled) =>
    setEnrolled([...enrolled, subscribe]), [enrolled]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('ourtube_token');

        if (!authenticated || !token)
          return;

        const headers = {
          Authorization: `Bearer ${JSON.parse(token)}`
        }

        const { data } = await api.get<Enrolled[]>('user/subscribes', { headers });

        setEnrolled(data);
      } catch (error) {
        return
      }
    })()
  }, [authenticated])

  return (
    <Context.Provider value={{ enrolled, dispatch }}>
      {children}
    </Context.Provider>
  )
}
export { useSelectorUser, UserProvider };
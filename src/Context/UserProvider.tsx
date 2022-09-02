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

type DispatchOptions = 'delete:enrolled' | 'post:enrolled';

interface Dispatch {
  type: DispatchOptions;
  enrolledSended: Enrolled;
}

interface User {
  enrolled: Enrolled[];
  dispatch?: React.Dispatch<Dispatch>;
}

const Context = createContext<User>({ enrolled: [] });

const useSelectorUser = (): User => useContext(Context);

function UserProvider({ children }: Provider) {
  const [enrolled, setEnrolled] = useState<Enrolled[]>([]);
  const { authenticated } = useSelectorAuth();

  const dispatch = useCallback(({ type, enrolledSended }: Dispatch) => ({
    'post:enrolled': () => setEnrolled([...enrolled, enrolledSended]),
    'delete:enrolled': () => {
      const enrolledSaved = enrolled
        .filter(({ channel_id }) => enrolledSended.channel_id !== channel_id);

      setEnrolled(enrolledSaved);
    },
  }[type]()), [enrolled]);

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
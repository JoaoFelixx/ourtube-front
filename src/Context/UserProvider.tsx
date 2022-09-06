import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { api } from 'service';
import { useSelectorAuth } from './AuthProvider';
import { Provider, Enrolled, Channel } from 'interfaces';

type DispatchOptions = 'delete:enrolled' | 'post:enrolled';

interface Subscribes {
  _id: string;
  user_id: string;
  channel_id: Channel;
}

interface SubscribeFormatted extends Enrolled{
  channel?: Channel;
}

interface Dispatch {
  type: DispatchOptions;
  enrolledSended: Enrolled;
}

interface User {
  enrolled: SubscribeFormatted[];
  dispatch?: React.Dispatch<Dispatch>;
}

const Context = createContext<User>({ enrolled: [] });

const useSelectorUser = (): User => useContext(Context);

function UserProvider({ children }: Provider) {
  const [enrolled, setEnrolled] = useState<SubscribeFormatted[]>([]);
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

        const { data } = await api.get<Subscribes[]>('user/subscribes', { headers });

        const subscribesFormatted = data.reduce<SubscribeFormatted[]>((acc, current, index) => {          
          const subscribe: SubscribeFormatted = {
            ...current,
            channel: current.channel_id,
            channel_id: current.channel_id._id,
          };

          return [...acc, subscribe];
        }, [])

        setEnrolled(subscribesFormatted);
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
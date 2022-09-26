import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { localizedStrings } from 'constants/localizedStrings';
import { Provider, ChannelAndEnrolled } from 'interfaces';

interface DispatchOptions {
  type: 'change:channel';
  channel?: ChannelAndEnrolled;
}

interface PanelProps {
  id?: string;
  channel?: ChannelAndEnrolled;
  location: string;
  dispatch?: React.Dispatch<DispatchOptions>;
}

const Context = createContext<PanelProps>({ location: '' });

const useSelectorChannel = (): PanelProps => useContext(Context);

function ChannelProvider({ children }: Provider) {
  const { id } = useParams();
  const [channel, setChannel] = useState<PanelProps['channel']>(undefined);
  const [location, setLocation] = useState<string>('');

  const dispatch = useCallback(({ type, channel: modifiedChannel }: DispatchOptions) => ({
    'change:channel': setChannel(modifiedChannel),
  }[type]), []);

  useEffect(() => {
    try {
      (() => ({
        '/myChannel': (async (): Promise<void> => {
          const token = localStorage.getItem('ourtube_token');

          if (!token)
            return

          const headers = {
            Authorization: `Bearer ${JSON.parse(token)}`
          }

          const { data, status } = await api.get<ChannelAndEnrolled>('/myChannel', { headers });

          if (status === 204)
            return

          setChannel(data);

          return
        })(),
        '/channel': (async (): Promise<void> => {
          const { status, data } = await api.get<ChannelAndEnrolled>(`/channel/${id}`);

          if (status === 204)
            return

          setChannel(data);

          return
        })()
      }[location] || setChannel(undefined)))()
    } catch (error) {
      toast.error(localizedStrings.errorGettingData)
    }
  }, [id, location]);

  useEffect(() => setLocation(window.location.pathname), []);

  return (
    <Context.Provider value={{ id, channel, location, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorChannel, ChannelProvider };
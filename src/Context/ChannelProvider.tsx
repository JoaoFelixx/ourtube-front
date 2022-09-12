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
  type: 'change:channel' | 'delete:channel' | 'toggle:modal';
  channel?: ChannelAndEnrolled;
}

interface PanelProps {
  id?: string;
  channel?: ChannelAndEnrolled;
  location: string;
  showModal: boolean;
  dispatch?: React.Dispatch<DispatchOptions>;
}

const Context = createContext<PanelProps>({
  location: '',
  showModal: false,
});

const useSelectorChannel = (): PanelProps => useContext(Context);

function ChannelProvider({ children }: Provider) {
  const { id } = useParams();
  const location = window.location.pathname;
  const [channel, setChannel] = useState<PanelProps['channel']>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useCallback(({ type, channel }: DispatchOptions) => ({
    'change:channel': setChannel(channel),
    'delete:channel': setChannel(undefined),
    'toggle:modal': setShowModal(!showModal),
  }[type]), [showModal]);

  useEffect(() => {
    (async () => {
      try {
        if (location !== '/myChannel') {
          const { status, data } = await api.get<ChannelAndEnrolled>(`/channel/${id}`);

          if (status === 204)
            return

          setChannel(data);

          return
        }

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

      } catch (error) {
        toast.error(localizedStrings.errorGettingData);
      }
    })()
  }, [id, location]);

  return (
    <Context.Provider value={{ id, channel, location, showModal, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorChannel, ChannelProvider };
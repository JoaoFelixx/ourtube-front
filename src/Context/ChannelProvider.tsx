import React, {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { localizedStrings } from 'constants/localizedStrings';
import { ChannelAndEnrolled, Provider } from 'interfaces';

interface PanelProps {
  id?: string;
  channel?: ChannelAndEnrolled;
  location: string;
  showModal: boolean;
  setChannel?: React.Dispatch<ChannelAndEnrolled>;
  setShowModal?: React.Dispatch<boolean>;
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

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('ourtube_token');

        if (location !== '/myChannel') {
          const { status, data } = await api.get<ChannelAndEnrolled>(`/channel/${id}`);

          if (status === 204)
            return

          setChannel(data);

          return
        }

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
    <Context.Provider value={{ id, location, channel, showModal, setChannel, setShowModal }}>
      {children}
    </Context.Provider>
  )
}

export {useSelectorChannel, ChannelProvider };
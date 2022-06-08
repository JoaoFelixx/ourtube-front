import { Channel } from 'interfaces';
import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  useParams,
} from 'react-router-dom';
import { api } from 'service';
import {
  HomePage,
  LoginPage,
  ShowVideoPage,
  MyChannelPage,
  ChannelByIdPage,
} from './pages';

function MyChannelOrOtherChannel(): JSX.Element {
  const { id } = useParams();
  const [channelId, setChannelId] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<Channel>('/channel');

        setChannelId(data?._id);
      } catch (err) {
        return
      }
    })()
  }, [])

  return (
    <React.Fragment>
      {id === channelId ? <MyChannelPage /> : <ChannelByIdPage />}
    </React.Fragment>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/video/:id/" element={<ShowVideoPage />} />
        <Route path="/channel/:id/" element={<MyChannelOrOtherChannel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
import React, { useEffect, useState } from 'react';
import { api } from 'service';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { Card, Icon, Page, Margin } from './style';
import { FlexContainer, SideNav, SearchBar, Subscribe } from 'components';

interface ISubscribedChannels {
  channel_id: Channel;
}

export function SubscribedChannels() {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('ourtube_token');

        if (!token)
          return

        const headers = {
          Authorization: `Bearer ${JSON.parse(token)}`
        }

        const { data } = await api.get<ISubscribedChannels[]>('/user/subscribes', { headers });

        const subscribes = data.reduce<Channel[]>((acc, current, index) =>
          [...acc, current.channel_id], [])

        setChannels(subscribes)

      } catch (error) {
        toast.error('Error getting channels');
      }
    })()
  }, [])

  return (
    <Page>
      <SideNav />
      <FlexContainer>
        <SearchBar />
        <Margin>
          {React.Children.toArray(
            channels.map(({ _id, name, description, icon_src }) => {
              return (
                <Link style={{ textDecoration: 'none' }} to={`/channel/${_id}`}>
                  <Card>
                    <Icon src={icon_src} alt={name} />
                    <div className='description' >
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                    <Subscribe id={_id} />
                  </Card>
                </Link>
              )
            })
          )}
        </Margin>
      </FlexContainer>
    </Page>
  )
}
import React, { useEffect, useState } from 'react';
import { api } from 'service';
import { Link } from 'react-router-dom';
import { Card } from './style';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';

export function SubscribedChannels() {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('ourtube_token');

        if (!token)
          return

        const headers = {
          'headers': {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(token)}`
          }
        }

        const { data } = await api.get<Channel[]>('/user/subscribes', headers);

        setChannels(data)

      } catch (error) {
        toast.error('Error getting channels');
      }
    })()
  }, [])

  return (
    <Card>
      {React.Children.toArray(
        channels.map(({ _id, name, description, icon_src }) => {
          return (
            <Link style={{ textDecoration: 'none' }} to={`/channel/${_id}`}>
              <div>
                <img src={icon_src} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </Link>
          )
        })
      )}
    </Card>
  )
}
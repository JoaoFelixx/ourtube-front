import React from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Enrolled, ID } from 'interfaces';
import { useSelectorUser } from 'Context/UserProvider';
import { SubscribeAtChannel, Subscribed } from './style';

export function Subscribe({ id }: ID) {
  const { enrolled, dispatch } = useSelectorUser();

  const subscribe = async () => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token)
        return

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      const data = { channel_id: id };

      const result = await api.post<Enrolled>('/subscribe', data, { headers });
      
      dispatch?.(result.data);

    } catch (error) {
      toast.error('Erro ao se inscrever, tente novamente');
    }
  }

  return (
    <React.Fragment>
      {enrolled.find(({ channel_id }) => channel_id === id) ?
        <Subscribed>INSCRITO</Subscribed> :
        <SubscribeAtChannel onClick={subscribe}>INSCREVA-SE</SubscribeAtChannel>
      }
    </React.Fragment>
  )
}
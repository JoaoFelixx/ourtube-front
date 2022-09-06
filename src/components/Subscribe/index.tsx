import React from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Enrolled, ID } from 'interfaces';
import { SubscribeButton } from './style';
import { useSelectorUser } from 'Context/UserProvider';
import { useSelectorAuth } from 'Context/AuthProvider';

export function Subscribe({ id }: ID) {
  const { enrolled, dispatch } = useSelectorUser();
  const { authenticated } = useSelectorAuth();
  
  const unsubscribe = async () => {
    try {
      const token = localStorage.getItem('ourtube_token');

      if (!token || !authenticated) {
        toast.warning('Faça Login');
        return
      }

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      const enrolledForDelete = enrolled.find(({ channel_id }) => channel_id === id);

      if (!enrolledForDelete)
        return

      await api.delete(`/subscribe/${id}`, { headers });

      dispatch?.({ type: 'delete:enrolled', enrolledSended: enrolledForDelete });

    } catch (error) {
      toast.error('Erro ao se desinscrever, tente novamente');
    }
  }

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

      dispatch?.({ type: 'post:enrolled', enrolledSended: result.data });

    } catch (error) {
      toast.error('Erro ao se inscrever, tente novamente');
    }
  }
  
  return (
    <React.Fragment>
      {enrolled.find(({ channel_id }) => channel_id === id) ?
        <SubscribeButton isSubscribed onClick={unsubscribe}>INSCRITO</SubscribeButton> :
        <SubscribeButton onClick={subscribe}>INSCREVA-SE</SubscribeButton>
      }
    </React.Fragment>
  )
}
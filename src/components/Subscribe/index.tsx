import React from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Enrolled, ID } from 'interfaces';
import { useSelectorUser } from 'Context/UserProvider';
import { SubscribeButton } from './style';

export function Subscribe({ id }: ID) {
  const { enrolled, dispatch } = useSelectorUser();

  const unsubscribe = async () => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token)
        return

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      await api.delete(`/subscribe/${id}`, { headers });

      const deletedEnrolled = enrolled.find(({ _id }) => _id === id);

      if (!deletedEnrolled)
        return

      dispatch?.({ type: 'delete', enrolledSended: deletedEnrolled });

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

      dispatch?.({ type: 'post', enrolledSended: result.data });

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
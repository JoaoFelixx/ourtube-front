import React from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Enrolled, ID } from 'interfaces';
import { SubscribeButton } from './style';
import { useSelectorUser } from 'Context/UserProvider';
import { localizedStrings } from 'constants/localizedStrings';

export function Subscribe({ id }: ID) {
  const { enrolled, dispatch } = useSelectorUser();
  
  const unsubscribe = async () => {
    try {
      const token = localStorage.getItem('ourtube_token');

      if (!token) {
        toast.warning(localizedStrings.makeLoginToAuthenticate);
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
      toast.error(localizedStrings.errorUnsubscribingTryAgain);
    }
  }

  const subscribe = async () => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token) {
        toast.warning(localizedStrings.makeLoginToAuthenticate);
        return
      }

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      const data = { channel_id: id };

      const result = await api.post<Enrolled>('/subscribe', data, { headers });

      dispatch?.({ type: 'post:enrolled', enrolledSended: result.data });

    } catch (error) {
      toast.error(localizedStrings.errorSubscribingTryAgain);
    }
  }
  
  return (
    <React.Fragment>
      {enrolled.find(({ channel_id }) => channel_id === id) ?
        <SubscribeButton isSubscribed onClick={unsubscribe}>{localizedStrings.subscribed}</SubscribeButton> :
        <SubscribeButton onClick={subscribe}>{localizedStrings.signUp}</SubscribeButton>
      }
    </React.Fragment>
  )
}
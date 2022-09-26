import { api } from 'service';
import { toast } from 'react-toastify';
import { Card, Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorChannel } from 'Context/ChannelProvider';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Channel, ChannelAndEnrolled } from 'interfaces';

export function FormChannel() {
  const { register, handleSubmit } = useForm<Omit<Channel, '_id'>>();
  const { channel, dispatch } = useSelectorChannel();

  const onSubmitData: SubmitHandler<Omit<Channel, '_id'>> = async (data) => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token)
        return

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      if (channel) {
        const { data: result } = await api.put<ChannelAndEnrolled>(`/channels/${channel._id}`, data, { headers });

        dispatch?.({ type: 'change:channel', channel: result })

        toast.success(localizedStrings.channelUpdatedWithSuccessful);

        return
      }

      const { data: result } = await api.post<ChannelAndEnrolled>('/channels', data, { headers });

      dispatch?.({ type: 'change:channel', channel: result })

      toast.success(localizedStrings.channelCreatedWithSuccessful);

    } catch (error) {
      toast.error(localizedStrings.errorUpdatingChannelTryAgain);
    }
  }

  return (
    <Card>
      <h1 style={{ textAlign: 'center' }} >{localizedStrings.customChannel}</h1><br />
      <form onSubmit={handleSubmit(onSubmitData)} className="data-form" name="channelForm">
        <label>{localizedStrings.channelName}</label><br />
        <input 
          type="text" 
          placeholder={channel?.name}
          {...register("name")} /><br /><br />
        <label>{localizedStrings.channelDescription}</label><br />
        <input 
          type="text"
          placeholder={channel?.description} 
          {...register("description")} /><br /><br />
        <Button color="#777777">{localizedStrings.send} </Button>
        <Button color="#ff0000">{localizedStrings.cancel}</Button>
      </form>
    </Card>
  )
}
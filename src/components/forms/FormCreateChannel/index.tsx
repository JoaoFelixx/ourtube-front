import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { Card, Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';

type ChannelDataProps = Omit<Channel, '_id'>;

export function FormCreateChannel() {
  const { register, handleSubmit } = useForm<ChannelDataProps>();

  const onSubmitData: SubmitHandler<ChannelDataProps> = async (data) => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token)
        return

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      await api.post('/channels', data, { headers });

      toast.success(localizedStrings.channelCreatedWithSuccessful);

    } catch (error) {
      toast.error(localizedStrings.errorRegisteringChannelTryAgain);
    }
  }

  return (
    <Card>
      <h1 style={{ textAlign: 'center' }} >{localizedStrings.customChannel}</h1><br />
      <form onSubmit={handleSubmit(onSubmitData)} className="data-form" name="channelForm">
        <label>{localizedStrings.channelName}</label><br />
        <input type="text" {...register("name")} /><br /><br />
        <label>{localizedStrings.channelDescription}</label><br />
        <input type="text" {...register("description")} /><br /><br />
        <Button color="#777777">{localizedStrings.send} </Button>
        <Button color="#ff0000">{localizedStrings.cancel}</Button>
      </form>
    </Card>
  )
}
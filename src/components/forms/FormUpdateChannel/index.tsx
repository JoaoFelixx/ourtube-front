import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { useParams } from 'react-router-dom';
import { Card, Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';
import { useForm, SubmitHandler } from 'react-hook-form';

export function FormUpdateChannel() {
  const { register, handleSubmit } = useForm<Channel>();
  const { id } = useParams();

  const onSubmitData: SubmitHandler<Channel> = async (data) => {
    try {
      const token = localStorage.getItem('ourtube_token')

      if (!token)
        return

      const headers = {
        Authorization: `Bearer ${JSON.parse(token)}`
      }

      await api.put(`/channels/${data._id}`, data, { headers });

      toast.success(localizedStrings.channelUpdatedWithSuccessful);
    } catch (error) {
      toast.error(localizedStrings.errorUpdatingChannelTryAngain);
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
        <input type="hidden" value={id} {...register('_id')} />
        <Button color="#777777">{localizedStrings.send} </Button>
        <Button color="#ff0000">{localizedStrings.cancel}</Button>
      </form>
    </Card>
  )
}
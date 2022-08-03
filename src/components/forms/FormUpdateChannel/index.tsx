import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { useParams } from 'react-router-dom';
import { Card, Button } from './style';
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

      toast.success('Canal criado com sucesso');
    } catch (error) {
      toast.error('Erro ao registrar canal, tente novamente');
    }
  }

  return (
    <Card>
      <h1 style={{ textAlign: 'center' }} >Personalizar Canal</h1><br />
      <form onSubmit={handleSubmit(onSubmitData)} className="data-form" name="channelForm">
        <label>Nome do Canal</label><br />
        <input type="text" {...register("name")} /><br /><br />
        <label>Descrição do canal</label><br />
        <input type="text" {...register("description")} /><br /><br />
        <input type="hidden" value={id} {...register('_id')} />
        <Button color="#777777">Enviar </Button>
        <Button color="#ff0000">Cancelar</Button>
      </form>
    </Card>
  )
}
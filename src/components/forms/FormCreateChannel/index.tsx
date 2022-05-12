import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Card, Button } from './style';

interface Channel {
  _id: string;
  name: string;
  description: string;
  banner_id?: string;
  icon_id?: string;
}

type ChannelDataProps = Omit<Channel, '_id'>;

export function FormCreateChannel() {
  const { register, handleSubmit } = useForm<ChannelDataProps>();

  const onSubmitData: SubmitHandler<ChannelDataProps> = async (data) => {
    try {

      await api.post('/channels', data);

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
        <Button color="#777777">Enviar </Button>
        <Button color="#ff0000">Cancelar</Button>
      </form>
    </Card>
  )
}
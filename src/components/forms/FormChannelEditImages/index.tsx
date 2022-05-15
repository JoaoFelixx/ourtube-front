import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, Button } from './style';
import { toast } from 'react-toastify';
import { api } from 'service';

interface ChannelImages {
  iconList: FileList;
  bannerList: FileList;
}

interface ChannelId {
  _id?:string;
}

export function FormChannelEditImages({ _id }: ChannelId) {
  const { register: registerImg, handleSubmit: submitImg } = useForm<ChannelImages>();

  const onSubmitImages: SubmitHandler<ChannelImages> = async ({ iconList, bannerList }) => {
		try {
			const formIcon = new FormData();
			const formBanner = new FormData();

			const icon = iconList?.[0];
			const banner = bannerList?.[0];

			if (!icon || !banner) {
				toast.error('Adicione todas as fotos')
				return 
			}

			formIcon.append('icon', icon);
			formBanner.append('banner', banner);

			const headers = { 
				'headers': {
					'Content-Type': 'application/json'
				}
			} 

			await Promise.all([
				api.put(`/channels/icon/${_id}`, formIcon, headers),
				api.put(`/channels/banner/${_id}`, formBanner, headers)
			])

			toast.success('Imagens enviadas com sucesso');

		} catch (error) {
			toast.error('Erro ao registrar imagens');
		}
	}

  return (
    <Card>
      <h1 style={{ textAlign: 'center' }} >Personalizar Canal</h1><br />
      <form onSubmit={submitImg(onSubmitImages)}>
        <label>Icone do Canal</label><br />
        <input type="file" {...registerImg('iconList')} /><br /><br />
        <label>Banner do canal</label><br />
        <input type="file" {...registerImg('bannerList')} /><br /><br />
        <Button color="#777777">Enviar </Button>
        <Button color="#ff0000">Cancelar</Button>
      </form>
    </Card>
  )
}
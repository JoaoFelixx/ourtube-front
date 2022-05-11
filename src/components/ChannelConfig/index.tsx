import React, { useState, useEffect, memo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { 
	Icon,  
	Card, 
	Exit,
	Modal,
	Button, 
	ButtonSend,
	EditChannel, 
} from './style';
import { api } from 'service';

interface ChannelDataProps {
	name: string;
	description: string;	
}

interface ChannelImageProps {
	icon: string;
	banner: string;
}

export function ChannelConfig() {
	const { 
		register: registerData, 
		handleSubmit: submitData 
	} = useForm<ChannelDataProps>();
	const { 
		register: registerImages, 
		handleSubmit: submitImage 
	} = useForm<ChannelImageProps>();

	const [channel, setChannel] = useState(null);
	const [showModal, setShowModal] = useState<boolean>(false);

	const onSubmitData: SubmitHandler<ChannelDataProps> = async (data) => {
		try {

			await api.post('/channels', data);

			toast.success('Canal criado com sucesso');

		} catch (error) {
			toast.error('Erro ao registrar canal, tente novamente');
		}
	}

	const onSubmitImages: SubmitHandler<ChannelImageProps> = async (data) => {
		try {

			console.log(data)

		} catch (error) {
			toast.error('Erro ao registrar imagens');
		}
	}

	const ChannelDataForm = memo(() => {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }} >Personalizar Canal</h1><br/>
				<form onSubmit={submitData(onSubmitData)} className="data-form" name="channelForm">
					<label>Nome do Canal</label><br />
					<input type="text" {...registerData("name")} /><br /><br />
					<label>Descrição do canal</label><br />
					<input type="text" {...registerData("description")}/><br /><br/>
					<ButtonSend color="#777777">Enviar </ButtonSend>
					<ButtonSend color="#ff0000">Cancelar</ButtonSend>
				</form>
			</div>
		)
	})

	const ChannelImagesForm = memo(() => {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }} >Personalizar Canal</h1><br/>
				<form onSubmit={submitImage(onSubmitImages)} name="channelForm">
					<label>Icone do Canal</label><br />
					<input type="file" {...registerImages("icon")} /><br /><br />
					<label>Banner do canal</label><br />
					<input type="file" {...registerImages("banner")}/><br /><br/>
					<ButtonSend color="#777777">Enviar </ButtonSend>
					<ButtonSend color="#ff0000">Cancelar</ButtonSend>
				</form>
			</div>
		)
	})


	useEffect(() => {
		(async () => {
			try {

				const result = await api.get('/myChannel');

				console.log(result);

			} catch (error) {
				toast.error('Erro ao buscar dados');
			}
		})()
	}, [])

	return (
		<Card><br />
			<EditChannel>
				{showModal && 
					<Modal>
						<Exit onClick={() => setShowModal(false)}>X</Exit>
						<ChannelDataForm />
					</Modal>
				}
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Icon src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="logo" />
					<div>
						<h1>DemonLixo</h1>
						<span style={{ color: '#777777' }} > Canal de comédia </span>
					</div>
				</div>
				<div>
					<Button onClick={() => setShowModal(true)}>Personalizar o canal</Button>
					<Button>Gerenciar Videos</Button>
				</div>
			</EditChannel>
		</Card>
	)
}
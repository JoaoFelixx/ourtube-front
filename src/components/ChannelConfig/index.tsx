import { useState, useEffect, memo } from 'react';
import { toast } from 'react-toastify';
import {
	Icon,
	Card,
	Exit,
	Modal,
	Button,
	EditChannel,
} from './style';
import { Banner } from '../Banner';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';
import { api } from 'service';
import { FormChannelImages, FormCreateChannel } from '../forms';
import { Channel } from 'interfaces';

export function ChannelConfig() {
	const [channel, setChannel] = useState<Channel | null>(null);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [formSelected, setFormSelected] = useState<string>('');

	const SelectForm = memo(() => {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}> Escolha o formulário de edição </h1>
				<div style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center'
				}}>
					<div onClick={() => setFormSelected('images')} style={{
						height: '140px',
						padding: '10px',
						backgroundColor: '#333333',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<MdAddAPhoto size="2em" /><br />
						Editar banner e icone do canal
					</div>

					<div style={{ width: '2px', height: '140px', backgroundColor: '#000' }} />

					<div onClick={() => setFormSelected('info')} style={{
						height: '140px',
						padding: '10px',
						backgroundColor: '#333333',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<AiTwotoneEdit size="2em" /><br />
						Editar nome e descrição do canal
					</div>
				</div>
			</div>
		)
	})

	useEffect(() => {
		(async () => {
			try {
				const { data, status } = await api.get<Channel | null>('/myChannel');

				if (status === 204)
					return

				setChannel(data);

			} catch (error) {
				toast.error('Erro ao buscar dados');
			}
		})()
	}, [])

	interface FormSelected {
		form: string;
	}

	const Forms = ({ form }: FormSelected): JSX.Element => ({
		'info': <FormCreateChannel />,
		'images': <FormChannelImages />,
	}[form] || <SelectForm />)

	return (
		<Card><br />
			{channel?.banner_id &&
				<Banner image={`http://localhost:4545/api/v1/files/${channel.banner_id}`} />
			}
			<EditChannel>
				{showModal &&
					<Modal>
						<Exit onClick={() => {setShowModal(false); setFormSelected(''); }}>X</Exit>
						<Forms form={formSelected}/>
					</Modal>
				}
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{channel?.icon_id ?
						<Icon src={`http://localhost:4545/api/v1/files/${channel.icon_id}`} alt="logo" />
						:
						<Icon src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="logo" />
					}

					<div>
						<h1>{channel?.name || 'Channel name'}</h1>
						<span style={{ color: '#777777' }} >
							{channel?.description || 'Description'}
						</span>
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

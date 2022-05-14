import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
	Icon,
	Card,
	Exit,
	Modal,
	Button,
	Separator,
	ClickCard,
	EditChannel,
	ContentCenter,
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
	}[form] || (
		<div>
			<h1 style={{ textAlign: 'center' }}> Escolha o formulário de edição </h1>
			<ContentCenter>
				<ClickCard onClick={() => setFormSelected('images')} >
					<MdAddAPhoto size="2em" /><br />
					Editar banner e icone do canal
				</ClickCard>

				<Separator />

				<ClickCard onClick={() => setFormSelected('info')}>
					<AiTwotoneEdit size="2em" /><br />
					Editar nome e descrição do canal
				</ClickCard>
			</ContentCenter>
		</div>
	))

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

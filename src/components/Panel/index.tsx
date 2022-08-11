import React, { useState } from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { useLocation } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { useSelectorUser } from 'Context/UserProvider';
import { FormChannelEditImages, FormUpdateChannel } from '../forms';
import {
	Card,
	Icon,
	Exit,
	Modal,
	Button,
	Content,
	Subscribe,
	ClickCard,
	Separator,
} from './style';
import IconImg from 'assets/default-icon.png';

interface PanelProps {
	channel?: Channel;
}

interface FormSelected {
	form: string;
}

export function Panel({ channel }: PanelProps) {
	const location = useLocation();
	const { enrolled } = useSelectorUser();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [formSelected, setFormSelected] = useState<string>('');

	const ButtonSubscribe = () => {
		const isEnrolled = enrolled.find(({ channel_id }) => {
			if (!channel)
				return false;

			return channel._id === channel_id
		});

		return (
			<Subscribe
				style={isEnrolled ? { backgroundColor: '#9B9B9B' } : { cursor: 'pointer' }}
				onClick={() => !isEnrolled && subscribe()}>
				{isEnrolled ? 'INSCRITO' : 'iNSCREVA-SE'}
			</Subscribe>
		)
	}

	const subscribe = async () => {
		try {
			const token = localStorage.getItem('ourtube_token')

			if (!token || !channel)
				return

			const headers = {
				Authorization: `Bearer ${JSON.parse(token)}`
			}

			const data = { channel_id: channel._id };

			await api.post('/subscribe', data, { headers });

		} catch (error) {
			toast.error('Erro ao se inscrever, tente novamente');
		}
	}

	const Forms = ({ form }: FormSelected): JSX.Element => ({
		'info': <FormUpdateChannel />,
		'images': <FormChannelEditImages />,
	}[form] || (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}> Escolha o formulário de edição </h1>
				<Content style={{ justifyContent: 'space-around' }}>
					<ClickCard onClick={() => setFormSelected('images')} >
						<MdAddAPhoto size="2em" /><br />
						Editar banner e icone do canal
					</ClickCard>

					<Separator />

					<ClickCard onClick={() => setFormSelected('info')}>
						<AiTwotoneEdit size="2em" /><br />
						Editar nome e descrição do canal
					</ClickCard>
				</Content>
			</React.Fragment>
		))

	return (
		<Card>
			{showModal &&
				<Modal>
					<Exit onClick={() => { setShowModal(false); setFormSelected(''); }}>X</Exit>
					<Forms form={formSelected} />
				</Modal>
			}
			<Content>
				<Icon src={channel ? channel.icon_src : IconImg} alt="Logo" />
				<div>
					<h1>{channel?.name}</h1>
					<span> 0 Inscritos </span>
				</div>
			</Content><br />

			<Content>
				{location.pathname !== '/myChannel' && channel ? <ButtonSubscribe /> : (
					<div>
						<Button onClick={() => setShowModal(true)}>Personalizar o canal</Button>
						<Button>Gerenciar Videos</Button>
					</div>
				)}
			</Content>
		</Card>
	)
}
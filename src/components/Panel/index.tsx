import React, { useState } from 'react';
import { Channel, ChannelAndEnrolled } from 'interfaces';
import { Subscribe } from '../Subscribe';
import { useLocation } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FormChannelEditImages, FormUpdateChannel } from '../forms';
import {
	Card,
	Icon,
	Exit,
	Modal,
	Button,
	Content,
	ClickCard,
	Separator,
} from './style';
import IconImg from 'assets/default-icon.png';

interface PanelProps {
	channel?: Channel | ChannelAndEnrolled;
}

interface FormSelected {
	form: string;
}

export function Panel({ channel }: PanelProps) {
	const location = useLocation();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [formSelected, setFormSelected] = useState<string>('');

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
					{channel && (
						<span>{'enrolled' in channel ? channel.enrolled.length : '0'} Inscritos </span>
					)}
				</div>
			</Content><br />
			<Content>
				{location.pathname !== '/myChannel' && channel ? <Subscribe id={channel._id} /> : (
					<div>
						<Button onClick={() => setShowModal(true)}>Personalizar o canal</Button>
						<Button>Gerenciar Videos</Button>
					</div>
				)}
			</Content>
		</Card>
	)
}
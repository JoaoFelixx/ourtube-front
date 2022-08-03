import { useState } from 'react';
import { Channel } from 'interfaces';
import { Link, useLocation } from 'react-router-dom';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';
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

interface PainelProps {
	channel: Channel;
}

interface FormSelected {
	form: string;
}

export function Panel({ channel }: PainelProps) {
	const location = useLocation();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [formSelected, setFormSelected] = useState<string>('');

	const Forms = ({ form }: FormSelected): JSX.Element => ({
		'info': <FormUpdateChannel />,
		'images': <FormChannelEditImages />,
	}[form] || (
			<>
				<h1 style={{ textAlign: 'center' }}> Escolha o formulário de edição </h1>
				<Content style={{ justifyContent: 'space-around' }}>
					<ClickCard onClick={() => setFormSelected('images')} >
						<MdAddAPhoto size="2em" /><br />
						Editar banner e icone do canal
					</ClickCard>

					<Separator />

					<ClickCard onClick={() => setFormSelected('info')}>
						<Link to={`/myChannel/${channel._id}`}>
							<AiTwotoneEdit size="2em" /><br />
							Editar nome e descrição do canal
						</Link>
					</ClickCard>
				</Content>
			</>
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
				<Icon src={`http://localhost:4545/api/files/${channel.icon_id}`} alt="Logo" />
				<div>
					<h1>{channel?.name}</h1>
					<span> 0 Inscritos </span>
				</div>
			</Content><br />

			<Content>
				{location.pathname !== '/myChannel' ? <Subscribe> Inscreva-se </Subscribe> : (
					<div>
						<Button onClick={() => setShowModal(true)}>Personalizar o canal</Button>
						<Button>Gerenciar Videos</Button>
					</div>
				)}
			</Content>
		</Card>
	)
}
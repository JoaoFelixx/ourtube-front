import React, { useState } from 'react';
import IconImg from 'assets/default-icon.png';
import { Subscribe } from '../Subscribe';
import { useLocation } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { localizedStrings } from 'constants/localizedStrings';
import { Channel, ChannelAndEnrolled } from 'interfaces';
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

interface PanelProps {
	channel?: Channel | ChannelAndEnrolled;
}

interface FormSelected { form: string; }
interface Subscribes {
	[index: number]: string;
	other: (number: number) => string;
}

export function Panel({ channel }: PanelProps) {
	const location = useLocation();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [formSelected, setFormSelected] = useState<string>('');
	const subscribes:Subscribes = {
		'1': '1 Inscrito',
		'other': (number: number) => `${number} inscritos`,
	}

	const Forms = ({ form }: FormSelected): JSX.Element => ({
		'info': <FormUpdateChannel />,
		'images': <FormChannelEditImages />,
	}[form] || (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}>{localizedStrings.selectEditForm}</h1>
				<Content style={{ justifyContent: 'space-around' }}>
					<ClickCard onClick={() => setFormSelected('images')} >
						<MdAddAPhoto size="2em" /><br />
						{localizedStrings.editBannerAndIconFromChannel}
					</ClickCard>
					<Separator />
					<ClickCard onClick={() => setFormSelected('info')}>
						<AiTwotoneEdit size="2em" /><br />
						{localizedStrings.editNameAndDescriptionFromChannel}
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
				<Icon src={channel ? channel.icon_src : IconImg} alt={`Logo ${channel?.name}`} />
				<div>
					<h1>{channel?.name}</h1>
					{channel && (
						<span>
							{'enrolled' in channel && 
								(subscribes[channel.enrolled.length] || subscribes.other(channel.enrolled.length))}
						</span>
					)}
				</div>
			</Content><br />
			<Content>
				{location.pathname !== '/myChannel' && channel ? <Subscribe id={channel._id} /> : (
					<div>
						<Button onClick={() => setShowModal(true)}>{localizedStrings.customChannel}</Button>
						<Button>{localizedStrings.managerVideos}</Button>
					</div>
				)}
			</Content>
		</Card>
	)
}
import React, { useState } from 'react';
import IconImg from 'assets/default-icon.png';
import BannerImg from 'assets/default-banner.png';
import { Banner } from 'components/Banner';
import { Subscribe } from '../Subscribe';
import { MdAddAPhoto } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorChannel } from 'Context/ChannelProvider';
import { FormChannelEditImages, FormChannel } from '../forms';
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

interface FormSelected {
	form: 'info' | 'images' | 'select'
}

interface Subscribes {
	[index: number]: string;
	other: (number: number) => string;
}

export function Panel() {
	const subscribes: Subscribes = {
		'1': '1 Inscrito',
		'other': (number: number) => `${number} inscritos`,
	}
	
	const [formSelected, setFormSelected] = useState<FormSelected['form']>('select');
	const [showModal, setShowModal] = useState<boolean>(false);
	const { channel, location, } = useSelectorChannel();

	const Forms = ({ form }: FormSelected): JSX.Element => ({
		'info': <FormChannel />,
		'images': <FormChannelEditImages id={channel?._id} />,
		'select': (
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
		)
	}[form]);

	return (
		<React.Fragment>
			<Banner src={channel?.banner_src || BannerImg} />
			<Card>
				{showModal &&
					<Modal>
						<Exit onClick={() => {
							setShowModal(false);
							setFormSelected('select');
						}}>X</Exit>
						<Forms form={formSelected} />
					</Modal>
				}
				<Content>
					<Icon src={channel?.icon_src || IconImg} alt={`Logo ${channel?.name}`} />
					<div>
						<h1>{channel?.name || 'Channel name'}</h1>
						{channel && (
							<span>
								{'enrolled' in channel &&
									(subscribes[channel.enrolled.length] || subscribes.other(channel.enrolled.length))}
							</span>
						)}
					</div>
				</Content><br />
				<Content>
					{(location !== '/myChannel' && channel) ? <Subscribe id={channel._id} /> : (
						<div>
							<Button
								onClick={() => setShowModal(true)}>
								{localizedStrings.customChannel}
							</Button>
							<Button>{localizedStrings.managerVideos}</Button>
						</div>
					)}
				</Content>
			</Card>
		</React.Fragment>
	)
}
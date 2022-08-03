import React, { useEffect, useState, memo } from 'react';
import { api } from 'service';
import { useParams } from 'react-router-dom';
import { Page, Margin } from '../style';
import { Channel, Provider } from 'interfaces';
import {
	Panel,
	Banner,
	SideNav,
	SearchBar,
	FlexContainer,
} from 'components';
import { Presentation } from './style';

export function ChannelById() {
	const { id } = useParams();
	const [channel, setChannel] = useState<Channel | null>(null);

	const MemorizedChannel = memo(({ children }: Provider) => {
		return (
			<FlexContainer>
				{children}
				{channel && (
					<Margin>
						<Banner src={channel.banner_src} />
						<Panel channel={channel} />
						<Presentation>
							<video controls autoPlay>
								<source src="https://youtu.be/ALA7CoagMUk?list=RDMMALA7CoagMUk" type="video/mp4" />
							</video>
							<div style={{ padding: '8px' }} >
								<h3>Conheça {channel.name}</h3><br />
								<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
									{channel.description}
								</p>
							</div>
						</Presentation>
					</Margin>
				)}
			</FlexContainer>
		)
	})

	useEffect(() => {
		(async () => {
			try {
				const { status, data } = await api.get(`/channel/${id}`);

				if (status === 204)
					return

				setChannel(data);

			} catch (error) {
				return
			}
		})()
	}, [id])

	return (
		<Page>
			<SideNav />
			<MemorizedChannel>
				<SearchBar />
			</MemorizedChannel>
		</Page>
	)
}
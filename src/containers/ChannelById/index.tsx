import React, { useEffect, useState } from 'react';
import { api } from 'service';
import { Channel } from 'interfaces';
import { useParams } from 'react-router-dom';
import { Page, Margin } from '../style';
import { Li, Btn, Tabs, Content, Presentation } from './style';
import {
	Panel,
	Banner,
	SideNav,
	SearchBar,
	FlexContainer,
	ListChannelVideos,
} from 'components';

interface PageSelected {
	page: string;
}

export function ChannelById() {
	const { id } = useParams();
	const [channel, setChannel] = useState<Channel | null>(null); 
	const [pageSelected, setPageSelected] = useState<string>('home');

	const Pagination = ({ page }: PageSelected) => ({
		'home': (
			<Content>
				<Presentation>
					{id && <ListChannelVideos id={id}/>}
					{channel && (
						<div style={{ padding: '8px' }} >
							<h3>Conheça {channel.name}</h3><br />
							<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
								{channel.description}
							</p>
						</div>
					)}
				</Presentation>
			</Content>
		),
		'about': (
			<Content>
				<Presentation>
					{channel && (
						<div style={{ padding: '8px' }} >
							<h3>Conheça {channel.name}</h3><br />
							<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
								{channel.description}
							</p>
						</div>
					)}
				</Presentation>
			</Content>
		),
	}[page] || (
		<Content>
			{id && <ListChannelVideos id={id}/>}
		</Content>
	));

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
			<FlexContainer>
				<SearchBar />
				{channel && (
					<Margin>
						<Banner src={channel.banner_src} />
						<Panel channel={channel} />
						<Tabs>
							<Li><Btn onClick={() => setPageSelected('home')}>INICIO</Btn></Li>
							<Li><Btn onClick={() => setPageSelected('videos')}>VIDEOS</Btn></Li>
							<Li><Btn onClick={() => setPageSelected('about')}>SOBRE</Btn></Li>
						</Tabs>
						<Pagination page={pageSelected} />
					</Margin>
				)}
			</FlexContainer>
		</Page>
	)
}
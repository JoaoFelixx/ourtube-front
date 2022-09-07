import { useEffect, useState } from 'react';
import { api } from 'service';
import { useParams } from 'react-router-dom';
import { localizedStrings } from 'constants/localizedStrings';
import { ChannelAndEnrolled } from 'interfaces';
import {
	Panel,
	Banner,
	SideNav,
	SearchBar,
	FlexContainer,
	ListChannelVideos,
} from 'components';
import { Li, Btn, Tabs, Page, Margin, Content, Presentation } from './style';

interface PageSelected {
	page: 'home' | 'about' | 'videos';
}

export function ChannelById() {
	const { id } = useParams();
	const [channel, setChannel] = useState<ChannelAndEnrolled | null>(null);
	const [pageSelected, setPageSelected] = useState<PageSelected['page']>('home');

	const Pagination = ({ page }: PageSelected) => ({
		'home': (
			<Content>
				<Presentation>
					{id && <ListChannelVideos id={id} />}
					{channel && (
						<div style={{ padding: '8px' }} >
							<h3>{localizedStrings.meet} {channel.name}</h3><br />
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
							<h3>{localizedStrings.meet} {channel.name}</h3><br />
							<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
								{channel.description}
							</p>
						</div>
					)}
				</Presentation>
			</Content>
		),
		'videos': (
			<Content>
				{id && <ListChannelVideos id={id} />}
			</Content>
		)
	}[page]);

	useEffect(() => {
		(async () => {
			try {
				const { status, data } = await api.get<ChannelAndEnrolled>(`/channel/${id}`);

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
							<Li><Btn onClick={() => setPageSelected('home')}>{localizedStrings.start}</Btn></Li>
							<Li><Btn onClick={() => setPageSelected('videos')}>{localizedStrings.videos}</Btn></Li>
							<Li><Btn onClick={() => setPageSelected('about')}>{localizedStrings.about}</Btn></Li>
						</Tabs>
						<Pagination page={pageSelected} />
					</Margin>
				)}
			</FlexContainer>
		</Page>
	)
}
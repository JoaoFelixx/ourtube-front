import React, { useState } from 'react';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorChannel, ChannelProvider } from 'Context/ChannelProvider';
import { Li, Btn, Tabs, Page, Margin, Content, Presentation } from './style'; import {
	Panel,
	SideNav,
	SearchBar,
	FlexContainer,
	ListChannelVideos,
} from 'components';

interface PageSelected {
	page: 'home' | 'about' | 'videos';
}

function Table() {
	const [pageSelected, setPageSelected] = useState<PageSelected['page']>('home');
	const { id, channel } = useSelectorChannel();

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

	return (
		<React.Fragment>
			<Tabs>
				<Li><Btn onClick={() => setPageSelected('home')}>{localizedStrings.start}</Btn></Li>
				<Li><Btn onClick={() => setPageSelected('videos')}>{localizedStrings.videos}</Btn></Li>
				<Li><Btn onClick={() => setPageSelected('about')}>{localizedStrings.about}</Btn></Li>
			</Tabs>
			<Pagination page={pageSelected} />
		</React.Fragment>

	)
}

export function ChannelById() {
	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<ChannelProvider>
						<Panel />
						<Table />
					</ChannelProvider>
				</Margin>
			</FlexContainer>
		</Page>
	)
}
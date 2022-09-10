
import { Page, Margin } from './style';
import {
	Panel,
	SideNav,
	SearchBar,
	FlexContainer,
	ListChannelVideos,
} from 'components';
import { useSelectorChannel, ChannelProvider } from 'Context/ChannelProvider';

function List() {
	const { id } = useSelectorChannel();

	return <ListChannelVideos id={id || ''} />
}

export function MyChannel() {
	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<ChannelProvider>
						<Panel />
						<List />
					</ChannelProvider>
				</Margin>
			</FlexContainer>
		</Page>
	)
}
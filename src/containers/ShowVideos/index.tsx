import {
	SideNav,
	ShowVideo,
	SearchBar,
	ListVideos,
	FlexVideos,
} from 'components';
import { Page } from '../style';
import { Flex } from './style';

export function ShowVideos() {
	return (
		<Page>
			<SideNav />
			<FlexVideos>
				<SearchBar />
				<Flex>
					<ShowVideo />
					<ListVideos />
				</Flex>
			</FlexVideos>
		</Page>
	)
}
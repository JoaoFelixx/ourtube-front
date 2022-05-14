import {
	SideNav,
	ShowVideo,
	SearchBar,
	ListVideos,
	FlexVideos,
} from 'components';
import { Page } from '../style';

export function ShowVideos() {
	return (
		<Page>
			<SideNav />
			<FlexVideos>
				<SearchBar />
				<ListVideos />
				<ShowVideo />
			</FlexVideos>
		</Page>
	)
}
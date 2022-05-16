import {
	SideNav,
	ShowVideo,
	SearchBar,
	ListVideos,
	FlexContainer,
} from 'components';
import { Page, Margin } from '../style';
import { Flex } from './style';

export function ShowVideos() {
	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<Flex>
						<ShowVideo />
						<ListVideos ifIsPhoneRemove={true}/>
					</Flex>
				</Margin>
			</FlexContainer>
		</Page>
	)
}
import { useParams } from 'react-router-dom';
import {
	SideNav,
	ShowVideo,
	SearchBar,
	ListVideos,
	FlexContainer,
} from 'components';
import { Page } from '../style';
import { Flex } from './style';

export function ShowVideos() {
	const { id } = useParams();

	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				{id && (
					<Flex>
						<ShowVideo id={id} />
						<ListVideos id={id} />
					</Flex>
				)}
			</FlexContainer>
		</Page>
	)
}
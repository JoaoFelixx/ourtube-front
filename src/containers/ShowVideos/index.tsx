import { useState, useEffect } from 'react';
import { Page } from '../style';
import { Flex } from './style';
import { useParams } from 'react-router-dom';
import { useSelectorVideos } from 'Context/VideosProvider';
import {
	SideNav,
	ShowVideo,
	SearchBar,
	FlexContainer,
	ListVideosById,
} from 'components';

export function ShowVideos() {
	const { id } = useParams();
	const videos = useSelectorVideos();
	const [channel_id, setChannel_id] = useState<null | string>(null);

	useEffect(() => {
		const video = videos?.find(({ _id }) => _id === id);

		if (!video)
			return

		setChannel_id(video.channel_id._id)
	}, [videos, id])

	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				{id && (
					<Flex>
						<ShowVideo id={id} />
						{channel_id && <ListVideosById id={channel_id} isDisplayNone={true} />}
					</Flex>
				)}
			</FlexContainer>
		</Page>
	)
}
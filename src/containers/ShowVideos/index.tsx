import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	SideNav,
	ShowVideo,
	SearchBar,
	FlexContainer,
	ListVideosById,
} from 'components';
import { Page } from '../style';
import { Flex } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

export function ShowVideos() {
	const [channel_id, setChannel_id] = useState<null | string>(null);
	const videos = useSelectorVideos();
	const { id } = useParams();

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
				{(videos && id) && (
					<Flex>
						<ShowVideo id={id} />
						{channel_id && <ListVideosById id={channel_id} isDisplayNone={true} />}
					</Flex>
				)}
			</FlexContainer>
		</Page>
	)
}
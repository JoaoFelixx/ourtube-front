import React, { useEffect, useState, memo } from 'react';
import { Video } from 'interfaces';
import { useSelectorVideos } from 'Context/VideosProvider';
import { Item, List, Flex, Content, Preview } from './style';

interface ListProps {
	id: string;
}

export function ListChannelVideos({ id }: ListProps) {
	const [videosSelected, setVideosSelected] = useState<null | Video[]>(null);
	const videos = useSelectorVideos();

	const Videos = memo(() => {
		return (
			<List>
				{React.Children.toArray(
					videosSelected?.map(({ _id, description, preview_src, channel_id }) => {
						return (
							<Item>
								<a 
									style={{ textDecoration: 'none', color: '#000' }} 
									href={`/video/${_id}`} >
									<Flex>
										<Preview src={preview_src} alt={description} />
										<Content>
											<h3>{description}</h3>
											<p>{channel_id.name}</p>
										</Content>
									</Flex>
								</a>
							</Item>
						)
					})
				)}
			</List>
		)
	})

	useEffect(() => {
		const videosWithSameId = videos?.filter(({ channel_id }) => channel_id._id === id);

		if (!videosWithSameId?.length)
			return

		setVideosSelected(videosWithSameId);

	}, [id, videos]);

	return <Videos />
}

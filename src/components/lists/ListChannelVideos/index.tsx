import React, { useEffect, useState, memo } from 'react';
import { Video, ID } from 'interfaces';
import { useSelectorApp } from 'Context/ApplicationProvider';
import { Item, List, Flex, Content, Preview } from './style';

export function ListChannelVideos({ id }: ID) {
	const { videos } = useSelectorApp();
	const [videosSelected, setVideosSelected] = useState<Video[]>([]);

	const Videos = memo(() => {
		return (
			<React.Fragment>
				{!id ? <p>Nenhum Video publicado</p> : (
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
				)}
			</React.Fragment>
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
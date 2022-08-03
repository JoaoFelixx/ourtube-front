import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'interfaces';
import { Item, List } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

interface ListProps {
	id: string;
	isDisplayNone?: boolean;
}

export function ListVideosById({ id, isDisplayNone }: ListProps) {
	const [videosSelected, setVideosSelected] = useState<null | Video[]>(null);
	const videos = useSelectorVideos();

	const Videos = memo(() => {
		return (
			<List isDisplayNone={isDisplayNone}>
				{React.Children.toArray(
					videosSelected?.map(({ _id, description, preview_src }) => {
						return (
							<Item>
								<Link to={`/video/${_id}`}>
									<div>
										<img src={preview_src} alt={description} />
										<p>{description}</p>
									</div>
								</Link>
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
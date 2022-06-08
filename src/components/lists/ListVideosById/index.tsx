import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'interfaces';
import { Item, List } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';
import { environments } from 'constants/environments';

interface ListProps {
	id: string;
	isDisplayNone?: boolean;
}

export function ListVideosById({ id, isDisplayNone }: ListProps) {
	const [videosSelected, setVideosSelected] = useState<null | Video[]>(null);
	const videos = useSelectorVideos();

	useEffect(() => {
		const videosWithSameId = videos?.filter(({ channel_id }) => channel_id._id === id);

		if (!videosWithSameId?.length)
			return

		setVideosSelected(videosWithSameId);

	}, [id, videos]);

	return (
		<List isDisplayNone={isDisplayNone}>
			{React.Children.toArray(
				videosSelected?.map(({ _id, photo_id, description }) => {
					return (
						<Item>
							<Link to={`/video/${_id}`}>
								<div>
									<img src={`${environments.API_URL}/files/${photo_id}`} alt="" />
									<p>{description}</p>
								</div>
							</Link>
						</Item>
					)
				})
			)}
		</List>
	)
}
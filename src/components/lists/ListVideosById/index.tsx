import React, { useEffect, useState, memo } from 'react';
import { Video } from 'interfaces';
import { Item, List } from './style';
import { useSelectorApp } from 'Context/ApplicationProvider';

interface ListProps {
	id: string;
	isDisplayNone?: boolean;
}

export function ListVideosById({ id, isDisplayNone }: ListProps) {
	const [videosSelected, setVideosSelected] = useState<null | Video[]>(null);
	const { videos } = useSelectorApp();

	const Videos = memo(() => {
		return (
			<List isDisplayNone={isDisplayNone}>
				{React.Children.toArray(
					videosSelected?.map(({ _id, description, preview_src }) => {
						return (
							<Item>
								<a href={`/video/${_id}`}>
									<div>
										<img src={preview_src} alt={description} />
										<p>{description}</p>
									</div>
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
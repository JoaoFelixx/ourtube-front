import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelectorApp } from 'Context/ApplicationProvider';
import {
	Icon,
	Card,
	Video,
	Title,
	Preview,
	Description,
	ChannelName,
} from './style';

export function Videos() {
	const { videos } = useSelectorApp();

	const Videos = memo(() => {
		return (
			<Card>
				{React.Children.toArray(
					videos?.map(({ _id, preview_src, channel_id, description }) => {
						return (
							<Video>
								<a href={`/video/${_id}`}>
									<Preview src={preview_src} alt="Preview" />
								</a>
								<Description>
									<Icon src={channel_id?.icon_src} alt="icon" />
									<div style={{ marginLeft: '6px' }}>
										<Title>{description}</Title>
										<Link style={{ textDecoration: 'none' }} to={`/channel/${channel_id._id}`}>
											<ChannelName> {channel_id.name} </ChannelName>
										</Link>
									</div>
								</Description>
							</Video>
						)
					})
				)}
			</Card>
		)
	})

	return <Videos />
}
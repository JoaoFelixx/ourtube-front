import React, { memo } from 'react';
import {
	Icon,
	Card,
	Video,
	Title,
	Preview,
	Description,
	ChannelName,
} from './style';
import { Link } from 'react-router-dom';
import { useSelectorVideos } from 'Context/VideosProvider';

function Videos() {
	const videos = useSelectorVideos();

	const Videos = memo(() => {
		return (
			<Card>
				{React.Children.toArray(
					videos?.map(({ _id, preview_src, channel_id, description }) => {
						return (
							<Video>
								<Link to={`/video/${_id}`}>
									<Preview src={preview_src} alt="Preview" />
								</Link>
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

export default Videos;
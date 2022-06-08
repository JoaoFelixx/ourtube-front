import React from 'react';
import { Link } from 'react-router-dom';
import {
	Icon,
	Card,
	Video,
	Title,
	Preview,
	Description,
	ChannelName,
} from './style';
import { useSelectorVideos } from 'Context/VideosProvider';
import { environments } from 'constants/environments';

function Videos() {
	const videos = useSelectorVideos()

	return (
		<Card>
			{React.Children.toArray(
				videos?.map(({ _id, mimetype, photo_id, description, channel_id }) => {
					return (
						<Video>
							<Link to={`/video/${_id}`}>
								<Preview src={`${environments.API_URL}/files/${photo_id}`} alt="Preview" />
							</Link>
							<Description>
								<Icon src={`${environments.API_URL}/files/${channel_id.icon_id}`} alt="icon" />
								<div style={{ marginLeft: '6px' }}>
									<Title>{description}</Title>
									<Link to={`/channel/${channel_id._id}`}>
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
}

export default Videos;
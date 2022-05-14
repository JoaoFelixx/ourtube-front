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

function Videos() {
	const videos = useSelectorVideos()

	return (
		<Card>
			{React.Children.toArray(
				videos?.map(({ _id, mimetype, photo_id, description, channel_id }) => {
					return (
						<Video>
							<Link to={`/video/${_id}`}>
								<Preview src={`http://localhost:4545/api/v1/files/${photo_id}`} alt="Preview" />
							</Link>
							<Description>
								<Icon src={`http://localhost:4545/api/v1/files/${channel_id.icon_id}`} alt="icon" />
								<div style={{ marginLeft: '6px' }}>
									<Title>{description}</Title> <br />
									<ChannelName> {channel_id.name} </ChannelName>
								</div>
							</Description>
						</Video>
					)
				})
			)}<br/>
		</Card>
	)
}

export default Videos;
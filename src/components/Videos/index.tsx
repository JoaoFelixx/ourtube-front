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
				videos?.map(({ _id, mimetype, photo_id }) => {
					return (
						<Video>
							<Link to={`/video/${_id}`}>
								<Preview poster={`http://localhost:4545/api/v1/files/${photo_id}`} loop>
									<source src={`http://localhost:4545/api/v1/files/${_id}`} type={mimetype} />
								</Preview>
								<Description>
									<Icon src="https://cdn.pixabay.com/photo/2016/03/31/18/25/alien-1294345_960_720.png" alt="icon" />
									<div style={{ marginLeft: '6px' }}>
										<Title>Video uploaded by Channel</Title> <br />
										<ChannelName> Channel name </ChannelName>
									</div>
								</Description>
							</Link>
						</Video>
					)
				})
			)}
		</Card>
	)
}

export default Videos;
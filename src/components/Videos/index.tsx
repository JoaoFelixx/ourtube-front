import React, { useEffect, useState } from 'react';
import { 
	Icon,
	Card,
	Video, 
	Title,
	Preview, 
	Description,
	ChannelName,
} from './style';
import { api } from '../../service';

interface VideosData {
	_id: string;
	createdAt: Date;
	mimetype: string;
	preview_src: string;
	updatedAt: Date;
}

const initialState = {
	_id: '',
	createdAt: new Date(),
	mimetype: '',
	preview_src: '',
	updatedAt: new Date(),
}

function Videos() {
	const [videos, setVideos] = useState<VideosData[]>([initialState]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get<VideosData[]>('/videos');

				setVideos(data);

			} catch (err) {
				console.error(err)
			}
		})()
	}, [])

	return (
		<Card>
			{React.Children.toArray(
				videos.map(({ _id, mimetype }) => {
					return (
						<Video> 
							<Preview controls>
							  <source src={`http://localhost:4545/api/v1/files/${_id}`} type={mimetype} />
							</Preview>
							<Description>
								<Icon src="https://cdn.pixabay.com/photo/2016/03/31/18/25/alien-1294345_960_720.png" alt="icon" /> 
								<div style={{ marginLeft: '6px' }}>
									<Title>Video uploaded by Channel</Title> <br/>
									<ChannelName> Channel name </ChannelName>
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
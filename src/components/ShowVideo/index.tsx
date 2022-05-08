import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from 'interfaces';
import { Card } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

export function ShowVideo() {
	const { id } = useParams();
	const videos = useSelectorVideos();
	const [videoSelected, setVideoSelected] = useState<Video | null>(null);

	useEffect(() => {
		const video = videos?.find(({ _id }) => _id === id);

		video && setVideoSelected(video);

	}, [videos, id])

	return (
		<Card>
			<h1>{id}</h1>
			{!videoSelected ? <h2>Error, video not a found</h2> : 
				<video poster={`http://localhost:4545/api/v1/files/${videoSelected?.photo_id}`} loop controls>
					<source
						src={`http://localhost:4545/api/v1/files/${videoSelected?._id}`}
						type={videoSelected?.mimetype} />
				</video> 
			}
		</Card>
	)
}
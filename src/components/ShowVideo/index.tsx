import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video as VideoData } from 'interfaces';
import { Video, Card } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

export function ShowVideo() {
	const { id } = useParams();
	const videos = useSelectorVideos();
	const [videoSelected, setVideoSelected] = useState<VideoData | null>(null);

	useEffect(() => {
		const video = videos?.find(({ _id }) => _id === id);

		video && setVideoSelected(video);

	}, [videos, id])

	return (
		<Card>
			{!videoSelected ? <h2>Error, video not a found</h2> : 
				<Video poster={`http://localhost:4545/api/v1/files/${videoSelected?.photo_id}`} loop controls>
					<source
						src={`http://localhost:4545/api/v1/files/${videoSelected?._id}`}
						type={videoSelected?.mimetype} />
				</Video> 
			}
		</Card>
	)
}

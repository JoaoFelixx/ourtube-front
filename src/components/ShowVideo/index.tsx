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
		try {
			const video = videos?.find(({ _id }) => _id === id);

			if(!video) 
				return
		
			setVideoSelected(video);
		
		} catch (error) {
			console.error(error)
		}
	}, [videos, id])

	return (
		<Card>
			{!videoSelected ? <h2>Error, video not a found</h2> : (
				<div style={{ margin: '5px' }}>
					<Video poster={`http://localhost:4545/api/v1/files/${videoSelected?.photo_id}`} loop controls>
						<source
							src={`http://localhost:4545/api/v1/files/${videoSelected?._id}`}
							type={videoSelected?.mimetype} />
					</Video>
				 	<div style={{ gridArea: 'comments' }}>
      			Comentarios
    			</div>
				</div>
			)}
		</Card>
	)
}
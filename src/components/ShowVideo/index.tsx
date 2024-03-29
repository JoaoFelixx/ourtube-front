import { useEffect, useState } from 'react';
import { Video, Card } from './style';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorApp } from 'Context/ApplicationProvider';
import { Video as VideoData, ID } from 'interfaces';

export function ShowVideo({ id }: ID) {
	const {videos} = useSelectorApp();
	const [videoNotExists, setVideoNotExists] = useState(false);
	const [videoSelected, setVideoSelected] = useState<VideoData | null>(null);

	useEffect(() => {
		const video = videos?.find(({ _id }) => _id === id);

		if (!video) {
			setVideoNotExists(true);
			return
		}

		setVideoSelected(video);
	}, [videos, id])

	return (
		<Card>
			{(!videoSelected && videoNotExists) ? <h2>{localizedStrings.errorVideoNotAFound}</h2> : (
				<div>
					<Video poster={videoSelected?.preview_src} loop controls>
						<source
							src={videoSelected?.video_src}
							type={videoSelected?.mimetype} />
					</Video>
					<div style={{ gridArea: 'comments' }}>
						{localizedStrings.comments}
					</div>
				</div>
			)}
		</Card>
	)
}
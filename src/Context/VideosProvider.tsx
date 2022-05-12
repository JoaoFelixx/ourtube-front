import React, {
	useState,
	useEffect,
	useContext,
	createContext,
} from 'react';
import { Video } from 'interfaces';
import { api } from 'service';

interface Provider {
	children: React.ReactNode;
}

const Context = createContext<Video[] | null>(null);

const useSelectorVideos = () => useContext(Context);

function VideosProvider({ children }: Provider) {
	const [videos, setVideos] = useState<Video[] | null>(null);

	useEffect(() => {
		(async () => {
			const { data } = await api.get<Video[]>('/videos');

			setVideos(data);
		})()
	}, [])

	return (
		<Context.Provider value={videos}>
			{children}
		</Context.Provider>
	)
}

export { VideosProvider, useSelectorVideos };
import React, { 
	useState, 
	useEffect, 
	useContext,
	createContext, 
} from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Video, Provider } from 'interfaces';

const Context = createContext<Video[]>([]);

const useSelectorVideos = () => useContext(Context);

function VideosProvider({ children }: Provider) {
	const [videos, setVideos] = useState<Video[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get<Video[]>('/videos');

				setVideos(data);

			} catch (error) {
				toast.error('Erro ao carregar videos do servidor')
			}
		})()
	}, [])

	return (
		<Context.Provider value={videos}>
			{children}
		</Context.Provider>
	)
}

export { VideosProvider, useSelectorVideos };
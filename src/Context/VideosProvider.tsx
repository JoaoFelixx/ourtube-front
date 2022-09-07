import { 
	useState, 
	useEffect, 
	useContext,
	createContext, 
} from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Video, Provider } from 'interfaces';
import { localizedStrings } from 'constants/localizedStrings';

const Context = createContext<Video[]>([]);

const useSelectorVideos = (): Video[] => useContext(Context);

function VideosProvider({ children }: Provider) {
	const [videos, setVideos] = useState<Video[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get<Video[]>('/videos');

				setVideos(data);

			} catch (error) {
				toast.error(localizedStrings.errorLoadingVideosFromServer);
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
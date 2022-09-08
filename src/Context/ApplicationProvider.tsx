import React, { 
	useState, 
	useEffect, 
	useContext,
	createContext, 
} from 'react';
import { api } from 'service';
import { Video, Provider } from 'interfaces';

type Theme = 'dark' | 'white';

interface Application {
	videos: Video[];
	theme: Theme;
	setTheme?: React.Dispatch<Application['theme']>;
}

const Context = createContext<Application>({ videos: [], theme: 'white' });

const useSelectorApp = (): Application => useContext(Context);

function ApplicationProvider({ children }: Provider) {
	const [videos, setVideos] = useState<Video[]>([]);
	const [theme, setTheme] = useState<Theme>('white');

	useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get<Video[]>('/videos');

				setVideos(data);

			} catch (error) {
				return
			}
		})()
	}, [])

	return (
		<Context.Provider value={{ videos, theme, setTheme }}>
			{children}
		</Context.Provider>
	)
}
export { ApplicationProvider, useSelectorApp };
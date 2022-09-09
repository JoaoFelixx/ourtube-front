import React, {
	useState,
	useEffect,
	useContext,
	createContext,
} from 'react';
import { api } from 'service';
import { Video, Provider, Channel } from 'interfaces';

type Theme = 'dark' | 'white';

interface Application {
	videos: Video[];
	channels: Channel[];
	theme: Theme;
	setTheme?: React.Dispatch<Application['theme']>;
}

const Context = createContext<Application>({
	videos: [],
	channels: [],
	theme: 'white'
});

const useSelectorApp = (): Application => useContext(Context);

function ApplicationProvider({ children }: Provider) {
	const [theme, setTheme] = useState<Theme>('white');
	const [data, setData] = useState<Omit<Application, 'theme' | 'setTheme'>>({
		channels: [],
		videos: [],
	});

	useEffect(() => {
		(async () => {
			try {
				const [
					{ data: videos },
					{ data: channels }
				] = await Promise.all([
					api.get<Video[]>('/videos'),
					api.get<Channel[]>('/channels'),
				])

				setData({ videos, channels });

			} catch (error) {
				return
			}
		})()
	}, [])

	return (
		<Context.Provider value={{ ...data, theme, setTheme }}>
			{children}
		</Context.Provider>
	)
}
export { ApplicationProvider, useSelectorApp };
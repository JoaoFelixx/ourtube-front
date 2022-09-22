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
	theme: Theme;
	videos: Video[];
	channels: Channel[];
	authenticated: boolean;
	setTheme?: React.Dispatch<Application['theme']>;
	setAuthenticated?: React.Dispatch<boolean>;
}

const Context = createContext<Application>({
	theme: 'white',
	videos: [],
	channels: [],
	authenticated: false,
});

const useSelectorApp = (): Application => useContext(Context);

function ApplicationProvider({ children }: Provider) {
	const [theme, setTheme] = useState<Theme>('white');
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [data, setData] = useState<Pick<Application, 'videos' | 'channels'>>({
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

	useEffect(() => {
		if (!localStorage.getItem('ourtube_token'))
			return 
			
		setAuthenticated(true);
	}, [])

	return (
		<Context.Provider value={{
			...data,
			theme,
			setTheme,
			authenticated,
			setAuthenticated,
		}}>
			{children}
		</Context.Provider>
	)
}

export { ApplicationProvider, useSelectorApp };
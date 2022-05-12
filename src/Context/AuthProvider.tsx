import React, { 
	useState,
	useEffect, 
	useContext, 
	createContext,
	SetStateAction,
} from 'react';

interface ContextData {
	authenticated: boolean;
	setAuthenticated?: React.Dispatch<SetStateAction<boolean>>
}

const Context = createContext<ContextData>({ authenticated: false });

const useSelectorAuth = () => useContext(Context);

interface Provider {
	children: React.ReactNode;
}

function AuthProvider({ children }: Provider) {
	const [authenticated, setAuthenticated] = useState<boolean>(false);

	useEffect(() => {

		if (!localStorage.getItem('ourtube_token'))
			return 
			
		setAuthenticated(true)
	}, [])

	return (
		<Context.Provider value={{ authenticated, setAuthenticated }}>
			{children}
		</Context.Provider>
	)
}

export { useSelectorAuth, AuthProvider };
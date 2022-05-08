import React, { 
	useState, 
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

	return (
		<Context.Provider value={{ authenticated, setAuthenticated }}>
			{children}
		</Context.Provider>
	)
}

export { useSelectorAuth, AuthProvider };
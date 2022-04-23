import { 
	Nav, 
	Div,
	Logo,
	Search,
} from './style';

function SearchBar() {
	return (
		<>
			<Nav>
				<Div>
					<Logo src="./img/ourtube-logo.png" alt="Logo" />
				</Div>
				<Div>
					<Search type="sarch" />
					<input type="submit" value="?"/>
				</Div>
				<Div>
					<Logo src="./img/ourtube-logo.png" alt="Logo" />
				</Div>
			</Nav>
		</>
	)
}

export default SearchBar;
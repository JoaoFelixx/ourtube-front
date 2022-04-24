import { GiMagnifyingGlass } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi'
import { 
	Nav, 
	Div,
	Logo,
	Search,
	LoginButton,
	SearchButton,
} from './style';

function SearchBar() {
	return (
		<>
			<Nav>
				<Div style={{ width: '22%' }} >
					<Logo src="./img/ourtube-logo.png" alt="Logo" />
				</Div>
				<Div style={{ width: '45%' }}>
					<Search type="sarch" placeholder="Pesquisar" />
					<SearchButton type="submit"><GiMagnifyingGlass /></SearchButton>
				</Div>
				<Div style={{ justifyContent: 'end', width: '28%' }}>
					<LoginButton> 
						<BiUserCircle color='#5A95E3' /> 
						<p style={{ marginLeft: '6px' }} >FAZER LOGIN</p> 
					</LoginButton>
				</Div>
			</Nav>
		</>
	)
}

export default SearchBar;
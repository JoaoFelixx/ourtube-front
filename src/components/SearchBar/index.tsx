import { Link } from 'react-router-dom';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi'
import {
	Nav,
	Logo,
	Search,
	CardLogo,
	CardLogin,
	SearchCard,
	LoginButton,
	SearchButton,
} from './style';
import { useSelectorAuth } from 'Context/AuthProvider';
const ourtube = require('../../assets/ourtube-logo.png');

function SearchBar() {
	const { authenticated } = useSelectorAuth();

	return (
			<Nav>
				<CardLogo>
					<Link to="/">
						<Logo src={ourtube} alt="Logo" />
					</Link>
				</CardLogo>
				<SearchCard>
					<Search type="sarch" placeholder="Pesquisar" />
					<SearchButton type="submit"><GiMagnifyingGlass /></SearchButton>
				</SearchCard>
				<CardLogin>
				{!authenticated && 
					<Link to="/login">
						<LoginButton>
							<BiUserCircle color='#5A95E3' />
							<p style={{ marginLeft: '6px' }} >FAZER LOGIN</p>
						</LoginButton>
					</Link>
				}
				</CardLogin>
			</Nav>
	)
}

export default SearchBar;
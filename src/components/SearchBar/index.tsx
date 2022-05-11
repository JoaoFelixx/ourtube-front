import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { TiSocialYoutube } from 'react-icons/ti';
import { GiMagnifyingGlass } from 'react-icons/gi';
import {
	Nav,
	Logo,
	Modal,
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
	const [showModal, setShowModal] = useState<boolean>(false);
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
				{showModal && 
					<Link to="/myChannel" >
						<Modal>
							<TiSocialYoutube />Canal
						</Modal>
					</Link>}
				{authenticated ? <CgMenuGridR style={{ cursor: 'pointer' }} onClick={() => setShowModal(!showModal)}/> : 
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
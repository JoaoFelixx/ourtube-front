import { useState } from 'react';
import { ImExit } from 'react-icons/im';
import { CgMenuGridR } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { TiSocialYoutube } from 'react-icons/ti';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
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
import Ourtube from '../../assets/ourtube-logo.png';

export function SearchBar() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState<boolean>(false);
	const { authenticated, setAuthenticated } = useSelectorAuth();

	const logOut = () => {
		setAuthenticated?.(false);

		localStorage.removeItem('ourtube_token');

		navigate('/');
	}

	return (
		<Nav>
			<CardLogo>
				<Link to="/">
					<Logo src={Ourtube} alt="Logo" />
				</Link>
			</CardLogo>
			<SearchCard>
				<Search type="sarch" placeholder="Pesquisar" />
				<SearchButton type="submit"><GiMagnifyingGlass /></SearchButton>
			</SearchCard>
			<CardLogin>
				<Modal isVisible={showModal}>
					<ul>
						<li>
							<Link to="/myChannel" >
								Canal <TiSocialYoutube />
							</Link>
						</li>
						<li style={{ cursor: 'pointer' }} onClick={logOut}>
							Sair <ImExit />
						</li>
					</ul>
				</Modal>

				{authenticated ?
					<CgMenuGridR
						style={{ cursor: 'pointer' }}
						onClick={() => setShowModal(!showModal)} />
					:
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

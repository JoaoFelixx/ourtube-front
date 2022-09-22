import React, { useEffect, useState } from 'react';
import Ourtube from 'assets/ourtube-logo.png';
import { ImExit } from 'react-icons/im';
import { useParams } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { useSelectorApp } from 'Context/ApplicationProvider';
import { TiSocialYoutube } from 'react-icons/ti';
import { localizedStrings } from 'constants/localizedStrings';
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

export function SearchBar() {
	const navigate = useNavigate();
	const { description } = useParams();
	const [search, setSearch] = useState<string>(description || '');
	const [options, setOptions] = useState<string[]>([]);
	const [showModal, setShowModal] = useState<boolean>(false);
	const {
		videos, channels, authenticated, setAuthenticated
	} = useSelectorApp();
	
	const logOut = () => {
		setShowModal(false);
		setAuthenticated?.(false);

		localStorage.removeItem('ourtube_token');

		navigate('/');
	}

	const onSubmitForSearch = () => navigate(`/search/${search}`);

	useEffect(() => {
		const videosDescriptions = videos.map(({ description }) => description);
		const channelNames = channels.map(({ name }) => name);

		setOptions([...videosDescriptions, ...channelNames])
	}, [videos, channels]);

	return (
		<Nav>
			<CardLogo>
				<Link to="/">
					<Logo src={Ourtube} alt="Logo" />
				</Link>
			</CardLogo>
			<SearchCard>
				<Search
					list='descriptions'
					type="search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder={localizedStrings.search} />
				<datalist id='descriptions' style={{ overflow: 'hidden' }}>
					{React.Children.toArray(
						options.sort().map((name, index) =>
							index > 7 ? null : <option value={name}></option>
						)
					)}
				</datalist>
				<SearchButton
					type="button"
					onClick={onSubmitForSearch}>
					<GiMagnifyingGlass />
				</SearchButton>
			</SearchCard>
			<CardLogin>
				<Modal isVisible={showModal}>
					<ul>
						<li>
							<Link style={{ textDecoration: 'none', color: '#000' }} to="/myChannel" >
								{localizedStrings.channel} <TiSocialYoutube />
							</Link>
						</li>
						<li style={{ cursor: 'pointer' }} onClick={logOut}>
							{localizedStrings.leave} <ImExit />
						</li>
					</ul>
				</Modal>
				{authenticated ?
					<CgMenuGridR
						style={{ cursor: 'pointer' }}
						onClick={() => setShowModal(!showModal)} /> :
					<Link style={{ textDecoration: 'none' }} to="/login">
						<LoginButton>
							<BiUserCircle color='#5A95E3' />
							<p style={{ marginLeft: '6px' }} >{localizedStrings.makeLogin.toUpperCase()}</p>
						</LoginButton>
					</Link>
				}
			</CardLogin>
		</Nav>
	)
}
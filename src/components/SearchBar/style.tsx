import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	flex-direction: row; 
	align-items: center;
	justify-content: space-around;
	border-bottom: 1px solid #ACB0B0;
	background-color: #EDEDED;
	grid-area: searchBar;
	height: 46px;
	padding: 6px;
`;

const Logo = styled.img` 
	width: 150px;
	cursor: pointer;
`; 

const Search = styled.input` 
	width: 100%;
	padding: 0 10px 0 10px;
	font-size: 16px;
`;

const LoginButton = styled.button` 
	display: inline-flex;
	align-items: center;
	padding: 8px;
	border: 2px solid #5A95E3;
	color: #5A95E3; 
	background-color: #fff;
	font-size: 15px;
	font-weight: bold;
	cursor: pointer;
`;

const SearchButton = styled.button`
	padding: 0 10px 0 10px;
	cursor: pointer;
`;

const CardLogo = styled.div`
	display: flex;
	width: 22%;

	@media (max-width: 768px) {
		display: none;
	}
`;

const SearchCard = styled.div`
	display: flex;
	width: 45%;

	@media (max-width: 768px) {
		width: 96%;
	}
`; 

const CardLogin = styled.div`
	display: flex;
	justify-content: end;
	width: 28%;

	@media (max-width: 768px) {
		display: none;
	}
`;

export {
	Nav,
	Logo,
	Search,
	CardLogo,
	CardLogin,
	SearchCard,
	LoginButton,
	SearchButton,
}
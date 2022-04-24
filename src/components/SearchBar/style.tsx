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

`; 

const Search = styled.input` 
	width: 100%;
	padding: 0 10px 0 10px;
	font-size: 16px;
`;

const Div = styled.div`
	display: flex;

	@media (max-width: 768px) {
		display: none;
	}
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
`;

const SearchButton = styled.button`
	padding: 0 10px 0 10px;
`;

export {
	Nav,
	Div,
	Logo,
	Search,
	LoginButton,
	SearchButton,
}
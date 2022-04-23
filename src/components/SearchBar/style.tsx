import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	flex-direction: row; 
	align-items: center;
	justify-content: space-between;

	grid-area: searchBar;
	background-color: yellow;
	height: 46px;
	padding: 6px;
`;

const Logo = styled.img` 
	width: 150px;

`; 

const Search = styled.input` 
	background-color: greeb;
	width: 100%;
`;

const Div = styled.div`
	width: 32%;
	display: flex;
	justify-content: auto;


	@media (max-width: 768px) {
		display: none;
	}
`;

export {
	Nav,
	Div,
	Logo,
	Search,
}
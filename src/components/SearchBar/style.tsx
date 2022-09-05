import styled from 'styled-components';

interface IsVisible {
	isVisible?: boolean;
}

const Nav = styled.nav`
	display: flex;
	flex-direction: row; 
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ACB0B0;
	background-color: #EDEDED;
	height: 3em;
	padding: 0.5em;
`;

const Logo = styled.img` 
	width: 10em;
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
	flex-grow: 2;

	@media (max-width: 768px) {
		display: none;
	}
`;

const SearchCard = styled.div`
	display: flex;
	flex-grow: 4;

	@media (max-width: 768px) {
		width: 96%;
	}
`;

const CardLogin = styled.div`
	flex-grow: 2;
	display: flex;
	justify-content: end;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Modal = styled.div<IsVisible>`
	visibility: ${props => props.isVisible ? 'normal' : 'hidden'};
	position: static;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 1.2em;
	background-color: #fff;
	color: #000; 

	ul {
    list-style-type:none;
    line-height: 2em;	
  }  

  li, li > a {
    display: flex;
    justify-content: space-between;
	  align-items: center;
  }
`;

export {
	Nav,
	Logo,
	Modal,
	Search,
	CardLogo,
	CardLogin,
	SearchCard,
	LoginButton,
	SearchButton,
}

import styled from 'styled-components';

const Nav = styled.nav`
	grid-area: sideNav;
	display: flex;
	justify-content: center;
	justify-items: center;
	align-content: center;
	background-color: #EDEDED;

	@media (max-width: 768px) {
		display: none;
	}
`;

const FixedContainer = styled.div` 
	position: fixed;
	height: auto;
	width: auto;
`; 

const Div = styled.div`
	text-align: center;
	padding: 10px 15px 20px;
	font-size: 12px;
	cursor: pointer;
	transition: 1s;

	&:hover {
		background-color: #C3C7C7;	
	}
`;

const Menu = styled.div`
	text-align: center;
	font-size: 12px;
	cursor: pointer;
`;

export {
	Nav,
	Div,
	Menu,
	FixedContainer,
}
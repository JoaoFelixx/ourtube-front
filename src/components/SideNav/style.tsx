import styled from 'styled-components';

const Nav = styled.nav`
	position: relative;
	padding: 0 3em;
	display: flex;
	justify-content: center;
	align-content: center;
	background-color: #EDEDED;
	height: infinite;
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
	font-size: 1em;
	cursor: pointer;
	padding: 15px 0;
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
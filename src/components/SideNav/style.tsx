import styled from 'styled-components';

const Nav = styled.nav`
	grid-area: sideNav;
	background-color: red;

	@media (max-width: 768px) {
		display: none;
	}
`;

const FixedContainer = styled.div` 
	position: fixed;
	height: auto;
	width: auto;
	background-color: green;

`; 

const Icon = styled.div` 
	width: 50px;
	height: 50px;
	background-color: black;
`; 

export {
	Nav,
	Icon,
	FixedContainer,
}
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

export {
	Nav,
	FixedContainer,
}
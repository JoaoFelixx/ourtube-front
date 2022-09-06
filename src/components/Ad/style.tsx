import styled from 'styled-components';

const Card = styled.div` 
	height: 200px;
	background-color: black;
	color: #fff;
	display: flex;
	padding: 6px;
`;

const Flex = styled.div` 
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Text = styled.h3`
	font-size: 1em;
`;

const Image = styled.img` 
	height: 168px;

	@media (max-width: 520px) {
		display: none;
	}
`;

export {
	Flex,
	Text,
	Card,
	Image,
}
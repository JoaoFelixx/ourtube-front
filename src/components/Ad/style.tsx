import styled from 'styled-components';

const Card = styled.div` 
	height: 200px;
	background-color: black;
	color: #fff;
	display: flex;
	padding: 6px;
`;

const Flex = styled.div` 
	width: auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Text = styled.h3`
	font-size: 14px;
`;

const Image = styled.img` 
	width: 140px;
`;

export {
	Flex,
	Text,
	Card,
	Image,
}
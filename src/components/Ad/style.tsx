import styled from 'styled-components';

const Card = styled.div` 
	grid-area: advertising;
	width: 100%;
	height: 200px;
	background-color: black;
	color: #fff;
	display: flex;
	padding: 6px;
`;

const Div = styled.div` 
	width: 48%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Text = styled.h3`
	font-size: 14px;
`;

const Image = styled.img` 
	width: 140px;
`;

export {
	Div,
	Text,
	Card,
	Image,
}
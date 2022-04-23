import styled from 'styled-components';

const Card = styled.div`
	grid-area: popWords;
	display: flex;
	align-content: center;
	height: 30px;
	padding: 6px;
`;

const Words = styled.p`
	display: inline;
	color: #000;
	border: 1px solid #C3C7C7;
	border-radius: 10px;
	background-color: #C3C7C7;
	padding: 6px;
	transition: 1s;
	cursor: pointer;

	&:hover {
		background-color: #ACB0B0;
		border: 1px solid #ACB0B0;
	}
`;

export {
	Card,
	Words,
}
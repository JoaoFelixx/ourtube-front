import styled from 'styled-components';

const Card = styled.div`
	grid-area: popWords;
	display: flex;
	align-content: center;
	height: 30px;
	padding: 6px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Words = styled.p`
	display: inline;
	color: #000;
	border: 1px solid #EDEDED;
	border-radius: 10px;
	background-color: #EDEDED;
	padding: 6px;
	margin: 0 2px;
	transition: 1s;
	cursor: pointer;

	&:hover {
		background-color: #C3C7C7;
		border: 1px solid #C3C7C7;
	}
`;

export {
	Card,
	Words,
}
import styled from 'styled-components';

interface Color {
	color: string;
}

const Card = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;
		width: 400px;
		height: auto;
		padding: 6px;
		border: 4px solid;
		border-image: linear-gradient(270deg, #000, #019AFA 100%) 1;
	}

	input {
		border: none;
		font-size: 1em;
		border-bottom: 1px solid #000;
	}

	img {
		width: 80px;
	}

	div.top {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Button = styled.button<Color>` 
	font-size: 1em;
	padding: 6px;
	color: #fff;
	background-color: ${props => props.color};
	width: 25%;
	float: right;
	cursor: pointer;
	border: none;
	margin: 1px;
`;

export { Card, Button }
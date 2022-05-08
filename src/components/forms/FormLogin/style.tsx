import styled from 'styled-components';

interface Color {
	color: string;
}

interface InputHasError {
	hasError?: boolean;
}

const Card = styled.div`
  background-image: url('./img/fireworks.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;


	form {
		display: flex;
		flex-direction: column;
		width: 400px;
		padding: 6px;
		border: 4px solid;
		border-image: linear-gradient(270deg, #fff, #019AFA 100%) 1;
		background-color: rgb(255,255,255,0.9);

		@media (max-width: 500px) {
			width: 94%;
		}
	}

	label {
		font-size: 16px;
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

const Input = styled.input<InputHasError>` 
	border: none;
	font-size: 18px;
	border-bottom: 2px solid ${props => props.hasError ? '#ff0000' : '#000'};
	background-color: transparent;
	&:focus {
		box-shadow: 0 0 0 0;
		outline: 0;
	}
`;

export { Card, Input, Button }
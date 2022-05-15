import styled from 'styled-components';

interface Color {
  color: string;
}

const Card = styled.div`
  form {
		padding: 6px;
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
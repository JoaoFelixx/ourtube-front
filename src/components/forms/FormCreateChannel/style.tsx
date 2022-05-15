import styled from 'styled-components';

interface Color {
	color: string;
}

const Card = styled.div`
  form {
  	padding: 0 20px;
  	
    input {
      width: 100%;
      font-size: 1em;
      border: none;
      border-bottom: 2px solid #000;

      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
    }
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
import styled from 'styled-components';

interface Color {
	color: string;
}

const Card = styled.div`
	grid-area: content;
	background-color: #EDEDED;
	height: 80vh;
	margin: 0 10px;
`;

const EditChannel = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	form {
		padding: 6px;
	}

	form.data-form {

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

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Icon = styled.img`
	width: 80px;
	border-radius: 100%;
	margin-right: 10px;
`;

const Button = styled.button`
	padding: 4px 10px;
	margin: 2px;
	color: #fff;
	border: none;
	font-size: 1em;
	background-color: blue;
	cursor: pointer;
`;

const Modal = styled.div`
	position: fixed;
  right: 0;
  left: 0;
  top: 100px;
  z-index: 1;
  display: block;
	margin: 0 auto;
	background-color: #fff;
	width: 600px;
	border: 1px solid #333333;

	div {
		padding: 10px 0 40px 0;
	}

	@media (max-width: 768px) {
		width: 92%;
	}
`;

const Exit = styled.button`
	background-color: #ff0000;
	float: right;
	color: #fff;
	padding: 6px 10px;
	font-size: 1em;
	font-weight: bold;
	cursor: pointer;
`; 

const ButtonSend = styled.button<Color>` 
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

export { EditChannel, ButtonSend, Button, Card, Icon, Modal, Exit };
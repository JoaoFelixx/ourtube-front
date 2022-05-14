import styled from 'styled-components';

interface Color {
	color: string;
}

const Card = styled.div`
	margin: 6px;
	height: 80vh;
	background-color: #EDEDED;
`;

const EditChannel = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

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

const ContentCenter = styled.div` 
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ClickCard = styled.div` 
	height: 140px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Separator = styled.div` 
	width: 2px; 
	height: 140px; 
	background-color: #000;
`;

export { 
	ContentCenter,
	EditChannel, 
	ButtonSend, 
	ClickCard,
	Separator,
	Button, 
	Modal,
	Card, 
	Icon, 
	Exit,
};
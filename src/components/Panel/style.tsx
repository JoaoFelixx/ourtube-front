import styled from 'styled-components';

const Card = styled.div`
	padding: 20px 0 0;
	display: flex;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Icon = styled.img` 
	display: embedded block;
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
	margin-right: 4px;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
`;

const ClickCard = styled.div` 
	padding: 0 10px 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Separator = styled.div` 
	position: absolute;
	width: 2px; 
	height: 40px; 
	background-color: #000;
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
	margin: auto;
	background-color: #FFF;
	width: 600px;
	border: 1px solid #333333;

	div {
		padding: 10px 0 20px 0;
	}

	@media (max-width: 768px) {
		width: 92%;
	}
`;

const Exit = styled.button`
	position: relative;
	background-color: #ff0000;
	float: right;
	color: #fff;
	top: -6px;
	padding: 6px 10px;
	font-size: 1em;
	font-weight: bold;
	cursor: pointer;
`; 

export { 
	Card, 
	Exit, 
	Icon, 
	Modal, 
	Button, 
	Content, 
	ClickCard, 
	Separator, 
};
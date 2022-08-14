import styled from 'styled-components';

const SubscribeAtChannel = styled.button` 
	background-color: #ff0000; 
	padding: 6px 12px;
	border: none;
	font-size: 1.2em;
	color: #fff;
	cursor: pointer;
	
	@media (max-width: 768px) {
		margin-left: 2px;
	}
`;

const Subscribed = styled.button`
	background-color: #9B9B9B; 
	padding: 6px 12px;
	border: none;
	font-size: 1.2em;
	color: #fff;
	
	@media (max-width: 768px) {
		margin-left: 2px;
	}
`;

export { SubscribeAtChannel, Subscribed };
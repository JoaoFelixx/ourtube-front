import styled from 'styled-components';

interface IsSubscribed {
	isSubscribed?: boolean; 
}

const SubscribeButton = styled.button<IsSubscribed>` 
	background-color: ${props => props.isSubscribed ? '#9B9B9B' : '#ff0000'}; 
	padding: 6px 12px;
	border: none;
	font-size: 1.2em;
	color: #fff;
	cursor: pointer;
	
	@media (max-width: 768px) {
		margin-left: 2px;
	}
`;

export { SubscribeButton };
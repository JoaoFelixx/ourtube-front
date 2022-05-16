import styled from 'styled-components';

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	
	@media (max-width: 768px) {
		flex-flow: column wrap;
		width: auto;
	}
`;

const Video = styled.div`
	display: flex;
	width: 32%;
	flex-flow: column wrap;
	cursor: pointer;

	@media (max-width: 768px) { 
		width: 100%; 
		height: auto; 
	}
`;

const Description = styled.div` 
	display: flex;
	flex-direction: row;
	align-items: center;
`; 

const Preview = styled.img`
	width: 100%;
	margin-bottom: 10px;
`;

const Icon = styled.img` 
	width: 50px;
	height: 50px;
	border-radius: 100px;
`;

const Title = styled.p` 
	color: #000;
	font-size: 20px;
	margin-bottom: 2px;
`; 

const ChannelName = styled.p`
	font-size: 14px;
	color: #ACB0B0;
	cursor: pointer;
`;

export {
	Icon,
	Card,
	Video,
	Title,
	Preview,
	Description,
	ChannelName,
}
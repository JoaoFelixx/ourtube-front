import styled from 'styled-components';

const Card = styled.div`	
	grid-area: videos;	
	display: flex;
	flex-flow: row wrap;
	align-content: center;
	padding: 6px;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-flow: column wrap;
	}
`;

const Video = styled.div`
	display: flex;
	flex-direction: column;
	width: 32%;
	height: 300px;
	border 1px solid #ACB0B0;
	cursor: pointer;

	@media (max-width: 768px) { width: 98%; }
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
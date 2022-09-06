import styled from 'styled-components';

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: #000;
`;

const Page = styled.div`
	width: 100%;
	display: flex;
`;

const Margin = styled.div`
	padding: 0.5em 1em;

	@media (max-width: 768px) {
		padding: 5px 4px;
	}
`;

const Card = styled.div`
	display: flex;
  margin-bottom: 1em;
  background-color: #EDEDED;
  align-items: stretch;
`;

const Image = styled.img`
	height: 15em;

	@media (max-width: 768px) {
		height: 12vh;
	}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 768px) {

  }
`;

const Icon = styled.img`
	height: 5vh;
  border-radius: 50%;
`;

const NoHasContent = styled.div`
	color: #0099ff;
	font-size: 1.2em;
`;

const IconChannel = styled.img`
	height: 14vh;
	border-radius: 50%;
	margin-right: 4em;
`;

const Channel = styled.div`
	display: flex;
	align-items: center;
	background-color: #EDEDED;
	justify-content: space-around;
	margin-bottom: 0.5em;

	@media (max-width: 500px) {
		justify-content: center;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export { 
	A, 
	Card, 
	Icon, 
	Page, 
	Image, 
	Title, 
	Filter,
	Margin, 
	Content,
	Channel,
	IconChannel,
	NoHasContent, 
};
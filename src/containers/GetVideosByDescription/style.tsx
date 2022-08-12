import styled from 'styled-components';

const Link = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: #000;
`;

const Card = styled.div`
	display: flex;
  margin-bottom: 1vh;
  background-color: #EDEDED;
  align-items: stretch;
`;

const Image = styled.img`
	height: 30vh;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-size: 4vh;
  text-transform: uppercase;
`;

const Icon = styled.img`
	height: 5vh;
  border-radius: 50%;
`;

export { Link, Card, Icon, Image, Title, Content };

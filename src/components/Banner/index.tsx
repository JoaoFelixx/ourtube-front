import styled from 'styled-components';

interface Image {
	image: string;
}

export const Banner = styled.img<Image>`
	width: 100%;
	height: 300px;
	background: url(${props => props.image});
`;
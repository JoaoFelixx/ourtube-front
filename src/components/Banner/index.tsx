import styled from 'styled-components';

interface Image {
	image: string;
}

export const Banner = styled.div<Image>`
	margin: 5px;
	min-height: 250px;
	max-height: 300px;
	background: url(${props => props.image});
`;
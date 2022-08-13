import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	padding: 5px;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Page = styled.div`
	width: 100%;
	display: flex;
`;

const Margin = styled.div`
	padding: 5px;

	div {
		padding: 5px 0;
	}
`;


export { Flex, Page, Margin };
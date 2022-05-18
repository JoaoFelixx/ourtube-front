import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	padding: 5px;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export { Flex };
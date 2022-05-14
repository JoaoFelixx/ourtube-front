import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: stretch;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export { Flex };
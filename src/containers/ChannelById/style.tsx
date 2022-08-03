import styled from 'styled-components';

const Presentation = styled.div` 
	background-color: #EDEDED;
	display: flex;
	padding: 12px;

	video {
		width: 40em;
	}

	@media (max-width: 768px) {
		padding: 0;
		flex-direction: column;

		video {
			width: 100%;
		}
	}
`;

export { Presentation };
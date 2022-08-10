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

const Tabs = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: end;
	width: 90%;

	li {
		display: inline-block;
		cursor: pointer;
	  margin: 4px 4px 4px 12px;
	  font-size: 1.3em;
	  border-bottom: 2px solid #000;
	}

	li:hover {
		transition: 1s;
		background-color: #EDEDED;
	}

	@media (max-width: 768px) {
		justify-content: start;

		li {
			font-size: 1em;
			margin: 4px;
		}
	}

`;

export { Tabs, Presentation };
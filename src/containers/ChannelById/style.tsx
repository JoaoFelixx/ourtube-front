import styled from 'styled-components';

interface Clicked {
	clicked?: boolean;
}

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

const Content = styled.div` 
	position: relative;
	animation: startAnimation 2s;

	@keyframes startAnimation {
	  from { opacity: 0.1; }
	  to { opacity: 1; }
	}
`;

const Tabs = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: end;
	width: 90%;

	@media (max-width: 768px) { justify-content: start; }
`;

const Li = styled.li<Clicked>`
	display: inline-block;
`;

const Btn = styled.button`
	border: none;
	border-bottom: 2px solid #000;
	cursor: pointer;
	font-size: 1.3em;
	margin: 4px 4px 4px 12px;
	transition: 1s;
	background-color: #FFF;
	text-transform: uppercase;

	&:after {
		background-color: #EDEDED;
	}

	&:focus {
		color: #54AFFA;
	}

	@media (max-width: 768px) {
		font-size: 1em;
		margin: 4px;
	}
`;

export { Li, Btn, Tabs, Page, Margin, Content, Presentation };
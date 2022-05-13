import styled from 'styled-components';

export const GridChannelById = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto auto;
	grid-template-areas: "searchBar searchBar"
											 "content 	content"
											 "content 	content";
	justify-content: center;
	
	@media (max-width: 768px) {
		grid-template-columns: 100%;
		grid-template-areas: "searchBar"
												 "content";
	} 
`;
import styled from 'styled-components';

export const GridVideos = styled.div` 
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: auto auto auto;
	grid-template-areas: "searchBar searchBar"
											 "video     listVideos"
											 "comments  comments";
	justify-content: center;
	grid-gap: 14px 10px;
	@media (max-width: 768px) {
		grid-template-columns: 100%;
		grid-template-areas: "searchBar"
												 "video"
												 "listVideos"
												 "comments";
	} 
`;
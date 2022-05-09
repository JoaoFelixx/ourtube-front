import styled from 'styled-components';

export const GridMyChannel = styled.div` 
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 7fr 7fr;
	grid-template-rows: auto auto auto;
	grid-template-areas: "sideNav searchBar searchBar"
											 "sideNav content 	content"
											 "sideNav content 	content";
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